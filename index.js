const baileys = require("@adiwajshing/baileys");
const path = require("path");
const pino = require("pino");
const message_list = require("./messages");

const {
  DisconnectReason,
  default: makeWaSocket,
  useMultiFileAuthState,
  makeInMemoryStore,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  proto,
} = baileys;

const logger = pino({ level: "error" });
const child = logger.child({});
child.level = "error";

const store = makeInMemoryStore({ logger: child });
const store_file = path.resolve("./store.json");
const auth_folder = path.resolve("./auth");

store.readFromFile(store_file);

setInterval(() => {
  store.writeToFile(store_file);
}, 10 * 1000);

let sock = null;

const connect = async (ws) => {
  const { state, saveCreds } = await useMultiFileAuthState(auth_folder);
  const { version, isLatest } = await fetchLatestBaileysVersion();

  sock = makeWaSocket({
    version,
    printQRInTerminal: true,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, child),
    },
    logger,
    generateHighQualityLinkPreview: false,
    shouldIgnoreJid: (jid) =>
      baileys.isJidBroadcast(jid) || baileys.isJidStatusBroadcast(jid),
    getMessage: async ({ id, remoteJid }) => {
      // if (store) {
      //   const loaded = await store.loadMessage(remoteJid, id);

      //   return loaded?.message;
      // }

      // return { conversation: "Hello" };
      return proto.Message.fromObject({});
    },
    patchMessageBeforeSending: (message) => {
      const requiresPatch = !!(
        message.buttonsMessage ||
        message.listMessage ||
        message.templateMessage
      );

      if (!requiresPatch) return message;

      message = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadataVersion: 2,
              deviceListMetadata: {},
            },
            ...message,
          },
        },
      };

      return message;
    },
  });

  store.bind(sock.ev);

  sock.ev.process(async (event) => {
    const connection_update = event["connection.update"];
    const creds_update = event["creds.update"];
    const messages_upsert = event["messages.upsert"];

    if (connection_update) {
      const { connection, lastDisconnect, qr } = connection_update;
      if (connection === "close") {
        console.log(
          `Connection closed due to ${lastDisconnect?.error?.message}`
        );

        const status_code = lastDisconnect.error?.output?.statusCode;
        const reconnect = status_code !== DisconnectReason.loggedOut;

        if (reconnect) sock = connect(ws);
        else console.log(`Connection closed. You have logged out`);
      } else if (connection === "open") {
        console.log(`WA Connection opened`);
      } else {
        console.log("Connecting");
      }
    }

    if (creds_update) await saveCreds();

    if (messages_upsert) {
      const { messages: m, type } = messages_upsert;

      const keys = m
        .filter(({ key }) => !key?.fromMe)
        .map(({ key }) => key)
        .filter(Boolean);

      try {
        await sock.readMessages(keys);

        const chat = m[0];

        if (!chat.message || type != "notify") return;

        const chat_jid = chat.key.remoteJid;
        if (!chat_jid) return;

        const input = chat.message.conversation.toLocaleLowerCase();
        const answer = message_list[input];

        if (!answer) return;

        await sock.sendMessage(chat_jid, answer, { quoted: chat });
      } catch (error) {
        //
      }
    }
  });

  return sock;
};

connect();
