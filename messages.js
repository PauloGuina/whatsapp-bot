const fs = require("fs");
const { functions, db } = require("./database");

db.on("migrated", () => {
  console.log("finished all database migrations");
});

const get_message_list = async (input) => {
  const message_list = {
    // TESTES DOS IRMÃOS

    "bom dia há todes.": { text: "Bom dia... !" },

    "vem ser feliz.": { text: "e lá vamos nós... 👀" },

    "boa...": { text: "rs..." },

    "porra !": { text: "hmm... 😉" },

    "chão chão, terra terra": { text: "o ser humano erra." },
    
    "toma!": { text: "👏👏" },

    "gostei.": { text: "afff..." },

    "gostei": { text: "😍" },

    "gostei porra": { text: "😍🍆🍼" },

    "boa noite!!!": { text: "Olá, filho de uma puta!" },

    "boa noite!": { text: "Olá!" },

    "quero piru": { image: fs.readFileSync("./media/cadu.jpg") },

    "ok cadu.": { text: "😍" },

    "cubo": { text: "🍆" },

    "primo": { text: "priminho..." },

    "no sofazinho é mais gostoso...": {
      image: fs.readFileSync("./media/sofa.jpg"),
    },

    "...": { text: "Aiiiiii... que ódiooo!!" },

    "ken pelado": {
      image: fs.readFileSync("./media/cadu.jpg"),
    },

    "@bryannunnes": {
      image: fs.readFileSync("./media/bryannunnes.jpg"),
    },

    "/diegobritto": { image: fs.readFileSync("./media/diegobritto.jpeg") },

    "/voli": { image: fs.readFileSync("./media/voli.jpg") },

    "??": { text: "!!" },

    "?": { text: "Fiquei com essa dúvida também!" },

    "vai tomar no cu": { text: "Vai você, seu desbocado! 😤" },

    "vai se foder": { text: "Vai você, seu desbocado! 😤" },

    filho: { text: "fala paizão!" },

    fdp: { text: "Olha essa boca!!! 🫵🫵🫵🫵" },

    "filho da puta": { text: "Olha essa boca!!! 🫵🫵🫵🫵" },

    "edson branco": { text: "Macaco" },

    "m!p ciumenta": { image: fs.readFileSync("./media/diegobritto.jpeg") },

    "valeu cadu.": {
      text: "👍",
    },

    "ih": {
      text: "pronto...",
    },

    "estou picudo": {
      text: "*ATENÇÃO*\n\nLuiz Felipe está tomando um banho e se masturbando agora. Tente contato novamente mais tarde para que ele assista uma jogatina",
    },

    "estou picudo.": {
      text: "Ai... Tá bom... To indo.",
    },

    "to picudo": {
      text: "*ATENÇÃO*\n\nLuiz Felipe está tomando um banho e se masturbando agora. Tente contato novamente mais tarde para que ele assista uma jogatina",
    },

    "to picudo.": {
      text: "Ai... Tá bom... To indo.",
    },

    "eu": {
      text: "Você",
    },

    "estou": {
      text: "Está",
    },

    "picudo": {
      text: "NÃÃÃÃÃÃÃÃÃOO!!!!!!!!!!!!!!!! EU NÃO VOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
    },

    "oi": {
      text: "Hola, que tal?",
    },

    "ok": {
      text: "é isso aí primo, continue a concordar que no futuro você será diferenciado em tudo o que fizer...!!!",
    },

    "kk": {
      text: "Essa risadinha aí é de quem quer pica hein! haha...",
    },

    "kk.": {
      text: "Tá querendo porra quente na boca, só pode...",
    },

    "que porra": {
      text: "Eh essa...",
    },

    "mlk": {
      text: "fala cmg mulekote!",
    },

    "???": {
      text: "ESTOU COM ESSA DÚVIDA TAMBÉM???? BOM DIA! COMO RESOLVEMOS ISSO?",
    },    

    "não.": {
      text: "não o QUÊ, HEIN? Filho da puta.",
    },

    "prima": {
      text: "AIII MEU DEUS LÁ VEM BABADO FORTEEEEEE!!!! 😍😍😍😍😍😍",
    },


    // Comandos

    "/ajuda": {
      text: "📱 *COMANDOS DO BOT*\n\n*/tutorial* - Nosso vídeo de tutorial (EM CONSTRUÇÃO)\n*/tamanhos* - Lista de tamanhos das camisas\n*/tamanhos2* - Instruções para escolhas de tamanhos no padrão chinês.\n*/cuidados* - Foto com os cuidados que devem ser tomados com as camisas.\n*/1.1* - Resposta se a camisa tá 1.1\n*/catalogo* - Envia o link de um catálogo que vocês podem utilizar na loja de vocês.",
    },

    "/tutorial": {
      text: "*LINK DO TUTORIAL NO YOUTUBE* \n\n*EM PROGRESSO*",
    },

    "/tamanhos": {
      text: "*LINK DO PDF DA TABELA DE TAMANHOS*: \n\nhttps://drive.google.com/file/d/1GtoQksDfL3lqf5wKDV1ZFJgQKaP10RTS/view?usp=share_link",
    },

    "/tamanhos2": {
      text: "*PADRÃO DE TAMANHO QUE VOCÊ DEVE MANDAR PARA O FORNECEDOR*\n\nP = *S*\nM = *M*\nG = *L*\nGG = *XL*\nXG1 = *2XL*\nXG2 = *3XL*\nXG3 = *4XL*\n\nLembrando que alguns modelos não vão até 4XL. Se informe com o vendedor antes de falar pro seu cliente que tem o modelo disponível nos tamanhos maiores.",
    },

    "/cuidados": { image: fs.readFileSync("./media/cuidados.jpg") },

    "/catalogo": {
      text: "*LINK PARA O NOSSO CATÁLOGO:* \n\nhttps://drive.google.com/file/d/1PUudBxcqFalu9ps7BdE-AUZ8amQvSWbz/view",
    },

    "/1.1": {
      text: "Se saiu tem pouco tempo, é por sua conta e risco! Ninguém acerta de primeira, não seria um chinês que mudaria essa história. \n\nAguarde pelo menos 1 mês após o lançamento para efetuar a compra se quer comprar sem riscos.",
    },

    "bem vindos": {
      text: "Sejam bem vindos, pessoal.\n\nTrabalhamos com um fornecedor que vende as peças a 9 dólares (próximo de 45 reais). Ele é Chinês, faz todo o esquema pra trazer aqui pro Brasil da melhor forma e no menor preço pra vocês.\n\nMuitos de vocês já conhecem o esquema, mas caso não saiba como importar e fazer sua primeira compra ainda, digite */comocomprar* que eu tenho uma resposta pronta pra isso.",
    },

    "/comocomprar": {
      text: "*COMO EFETUAR SUA PRIMEIRA COMPRA*\n\n*PRIMEIRO PASSO*\nSelecione sua camisa no catálogo yupoo, tire print e entre em contato com o CHINÊS do grupo (+86 ...)\n\n*SEGUNDO PASSO*\nEnvie fotos da camisa para ele, seguindo o seguinte padrão:\nType: Fan, Player, Retro ou afins\nSize: S, M, L, 2XL, 3XL, 4XL (digite /tamanhos2 para pegar a relação caso não saiba)\nWoman (se a camisa for feminina), Man (se for masculina)\n_Caso tenha customização_\nName: (NOMECUSTOMIZAÇÃO) -> Tudo em maiúsculo para o fornecedor não se confundir\nNumber: (NÚMERO)\n\n*TERCEIRO PASSO*\napós recolher seu pedido, o fornecedor irá te mandar um link do Aliexpress, geralmente o item vai custar algo em torno de 1 dólar.\nJunto ao link, o fornecedor te enviará o valor que deve ser pago. Por exemplo:\n9+5 = 13\nE aí você irá comprar 13 unidades do produto e enviar o ID da ordem pra ele.\nDepois disso, basta só aguardar que ele te enviará a foto do seu pedido pra você conferir antes que ele envie.",
    },




    // FORNECEDORES

    "/molaosi": {
      text: "*BEM VINDO*\n\n*Grupo do fornecedor MO LAOSI!* \n\n📱 Whatsapp: +86 131 8902 1819\n\n🗂 Yupoo: royal-sports.x.yupoo.com \n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n💵TABELA MO LAOSI\n\n👕 Fan = 9$ \n\n👕 Player\nAdidas = 14$\nNike =  16$\n\n🧒🏻 Kit Infantil = 13$\n\n🩳 Short\nCom Bolso = 12$\nSem Bolso = 8$\n\n🧦 Meia = 6$\n\n🧥👖 CONJUNTOS\nZíper até o Peito = 40/42$\nZíper completo = 43/48$\n\n👕 Polo = 13$\n\n🧥 Corta vento ou jaqueta = 30/35$\n\n👖 Calça = 17$\n\n📆 Camisa Retrô = 15$\n\n🏀 NBA\nBordada = 19$ a 24$\nSilkada = 20 a 24$\n\n👕 NOME E NÚMERO = 3$\n\n👕➕ TAMANHO EXTRA\n2XL +1$ \n3XL +2$\n\nPATCH🏆 = 1$ \n\n✈️ FRETE\n👕 = 5$\n👕👕 = 4$\n👕👕👕 = 3$\n👕👕👕👕= 2$\n👕👕👕👕👕 = GRÁTIS!\n",
    },

    "/dolarmolaosi": {
      text: "*LINK PARA CHECAR O DÓLAR MO LAOSI:* \n\nhttps://www.aliexpress.com/item/1005005483501345.html?spm=5261.ProductManageOnline.0.0.83cb2ddbtiQOoh",
    },

  };

  if (message_list[input]) return message_list[input];

  const database_messages = {
    "bom dia bokoo": async () => {
      const count = await functions.get_days_since_project("bokoo");

      return {
        text: `Mais um dia sem o Bokoo.\n\nHoje é o dia número ${count} desde que começamos a contar.\n\n#ForçasLuiz!`,
      };
    },
    "bom dia poover": async () => {
      const count = await functions.get_days_since_project("poover");

      return {
        text: `Hoje é o ${count}º dia sem o poover.\n\nCoitadas de nossas garotas...\n\n#ForçasLuiz!`,
      };
    },
  };

  const database_command = database_messages[input];

  if (!database_command) return;

  const message = await database_command();
  return message;
};

module.exports = { get_message_list };
