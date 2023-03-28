const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
require('dotenv').config()


const client = new Client({
    authStrategy: new LocalAuth, puppeteer: {
        headless: true,
        executablePath: process.env.CHROME_PATH || '',
    }
});

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small: true })
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (msg) => {
    const questions = {

        // COMANDOS TESTE
        'ken pelado': MessageMedia.fromFilePath('./cadu.jpg'),
        'quero piru': MessageMedia.fromFilePath('./cadu.jpg'),
        '@bryannunnes': MessageMedia.fromFilePath('./bryannunnes.jpg'),
        'boa noite!': 'Boa noite!!!',
        'vai tomar no cu':'vai voce que tá mais acostumado!!! grr....🗣🗣🗣🗣⚡⚡⚡',

        // COMANDOS BOT
        '/kaka': 'sei lá',
        'braza': 'oi',
        'royal': '*Bem vindo(a) ao grupo do ROYAL SPORTS!* \n\n📱 Whatsapp: +86 135 3997 8787\n🗂 Yupoo: http://goo.gl/e7KEAd\n💵 Pagamento: Aliexpress/WU/Paypal\n-------------------------------------------------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n▫ Fan Lisa:\n   ▪Masculino e feminino: 12$\n   ▪Manga longa: 14$\n▫ Player lisa:\n   ▪Adidas: 15$\n   ▪Puma: 16$\n   ▪Nike: 18$\n▫ Retrô: 15$\n▫ Kit Infantil: 12$\n\n👖Short: - (Personalização do número grátis)\n   ▫ Fan: 8$\n   ▫ Player: 12$\n🧦 Meia: 3$ - 6$\n Windbreaker (Corta-Vento): 28$ a 30$\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Zíper curto\n    ▪Conjunto: 42$\n    ▪Agasalho: 30$\n    ▪Calça: 18$\n▫ Zíper Completo: 45$\n    ▪ Conjunto: 45$\n    ▪Agasalho: 30$\n    ▪Calça:\n    18$\n \n *🔠 PERSONALIZAÇÃO 🔠* \n O valor deve ser adicionado ao valor da Jersey\n ▪ Nome + número: ➕ 3$\n ▪ Patch: ➕ 1$',
        'dolarcurry': 'https://www.aliexpress.us/item/3256804972742382.html?spm=5261.ProductManageOnline.0.0.5f644edfQwwwWY&gatewayAdapt=glo2usa4itemAdapt&_randl_shipto=US',
        'tutorial': MessageMedia.fromFilePath('./tutorial.mp4'),
        '/tamanhos':MessageMedia.fromFilePath('./Tamanhos.pdf'),
    }

    const response = questions[msg.body.toLocaleLowerCase()];

    if (response) {
        try {
            await msg.reply(response)
        } catch (error) {
            console.log({ error })
        }
    }

});

client.initialize();