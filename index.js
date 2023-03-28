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
        '/ajuda': '* 📱 COMANDOS BOT DO BRAZA*\n\n */braza* - Informações a respeito da equipe Braza \n */linktree* - Link do nosso linktree \n */tutorial* - Nosso vídeo de tutorial (mande apenas uma vez, pode demorar a enviar) \n */tamanhos* - Lista de tamanhos das camisas \n */cuidados* - Foto com os cuidados que devem ser tomados com as camisas. \n \n *COM FORNECEDORES* \n */kaka* - Informações do fornecedor KAKA\n */dolarkaka* - Link de pagamento do KAKA \n \n */royal* - Informações do fornecedor ROYAL \n */dolarroyal* - Link de pagamento do fornecedor ROYAL\n\n _E segue neste padrão para os fornecedores Curry e Guo_',
        '/braza': '*Bem vindo(a) à equipe BRAZA XPORTS*.\n\n Qual o objetivo do grupo?\n Criamos o grupo com a intenção de auxiliar novos importadores no mercado a comprar com os melhores fornecedores, evitando golpes e transtornos envolvendo a qualidade do produto comprado. \n \n Com que tipo de fornecedores lidamos? \n Atualmente temos fornecedores de tailandesas e réplicas de tênis, mas usamos o grupo pra conversar sobre qualquer coisa envolvendo importação.\n Nosso linktree: https://linktr.ee/fornecedoresindicados \n \n \n Para mais dúvidas, chame algum administrador ou pergunte no grupo. \n _Equipe Braza Xports_',
        '/linktree':'https://linktr.ee/fornecedoresindicados',
        '/tutorial': MessageMedia.fromFilePath('./tutorial.mp4'),
        '/tamanhos': MessageMedia.fromFilePath('./Tamanhos.pdf'),
        '/cuidados': MessageMedia.fromFilePath('./cuidados.jpg'),

        '/kaka': '*Bem vindo(a) ao KAKA SHOP!* \n\n📱 Whatsapp: +86 159 7596 2575\n Link do grupo: https://chat.whatsapp.com/JXH5DMdHAMW1gdqoLSe8sX\n🗂 Yupoo: https://kakahuaze123.x.yupoo.com/\n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n   ▪Masculino e feminino: 10$\n   ▪Manga longa: 14$\n   *OBS: PROMOÇÃO - 5 CAMISAS FAN POR 45$*\n▫ Player lisa:\n   ▪Adidas: 13$\n   ▪Puma: 16$\n   ▪Nike: 16$\n▫ Retrô: 16$\n▫ Kit Infantil: 14$\n\n👖Short:\n   ▫ Fan: 8$\n   ▫ Player: 12$\n🧦 Meia: 3$ - 6$\n🧥 Windbreaker (Corta-Vento): 35$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n    ▪Conjunto: 28$\n▫ Manga longa\n    ▪ Conjunto: 45$\n     ------------------------------------------ \n *🔠 PERSONALIZAÇÃO 🔠* \n O valor deve ser adicionado ao valor da Jersey\n ▪ Nome + número: ➕ 3$\n ▪ Patch: ➕ 1$\n *TAMANHOS EXTRA*\n 2XL, 3XL, 4XL: + 1$ \n \n \n _Equipe Braza Xports.',
        '/dolarkaka' : '*LINK DE COMPRA KAKA* \nhttps://cutt.ly/h4LKwCg',

        '/royal' : '*Bem vindo(a) ao grupo do ROYAL SPORTS!* \n\n📱 Whatsapp: +86 135 3997 8787\n Link do grupo: https://chat.whatsapp.com/H5qkZYio99O1NRbZdWuNgO \n🗂 Yupoo: http://goo.gl/e7KEAd\n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n   ▪Masculino e feminino: 12$\n   ▪Manga longa: 14$\n▫ Player lisa:\n   ▪Adidas: 15$\n   ▪Puma: 16$\n   ▪Nike: 18$\n▫ Retrô: 15$\n▫ Kit Infantil: 12$\n\n👖Short:\n   ▫ Fan: 8$\n   ▫ Player: 12$\n🧦 Meia: 3$ - 6$\n🧥 Windbreaker (Corta-Vento): 28$ a 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n    ▪Conjunto: 42$\n▫ Manga longa\n    ▪ Conjunto: 45$\n     ------------------------------------------ \n *🔠 PERSONALIZAÇÃO 🔠* \n O valor deve ser adicionado ao valor da Jersey\n ▪ Nome + número: ➕ 3$\n ▪ Patch: ➕ 1$\n *TAMANHOS EXTRA*\n 2XL, 3XL, 4XL: + 1$ \n \n \n _Equipe Braza Xports._',
        '/dolarroyal':'*LINK DE COMPRA ROYAL*\n https://www.aliexpress.com/item/1005005313639135.html',
        
        '/curry': '*Bem vindo(a) ao grupo do fornecedor CURRY!* \n\n📱 Whatsapp: +86 181 2218 0753\n Link do grupo: https://chat.whatsapp.com/CqYP1oN27sX7Y06JYCm1gs \n🗂 Yupoo \n *FOOTBALL*: https://cutt.ly/k4LZb8Q \n *NBA*: https://cutt.ly/F4LZTCk \n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n   ▪Masculino e feminino: 10$\n   ▪Manga longa: 14$\n*OBS: PROMOÇÃO*\n   3 CAMISAS FAN POR 30$ + FRETE GRÁTIS \n   4 CAMISAS FAN POR 38$ + FRETE GRÁTIS \n   5 CAMISAS FAN POR 45$ + FRETE GRÁTIS \n▫ Player lisa:\n   ▪Adidas: 13$\n   ▪Puma: 16$\n   ▪Nike: 16$\n▫ Retrô: 16$\n▫ Kit Infantil: 14$\n\n👖Short:\n   ▫ Fan: 8$\n   ▫ Player: 12$\n🧦 Meias: 3$ - 7$\n🧥 Windbreaker (Corta-Vento): 28$ a 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n    ▪Conjunto: 42$\n▫ Manga longa\n    ▪ Conjunto: 45$\n \n 🏀NBA: $19 \n \n------------------------------------------ \n *🔠 PERSONALIZAÇÃO 🔠* \n O valor deve ser adicionado ao valor da Jersey\n ▪ Nome + número: ➕ 3$\n ▪ Patch: ➕ 1$\n *TAMANHOS EXTRA*\n 2XL, 3XL, 4XL: + 1$ \n \n \n _Equipe Braza Xports._',
        '/dolarcurry': '*LINK DE COMPRA CURRY*\nhttps://cutt.ly/s4LFXA6',

        '/guo': '*Bem vindo(a) ao grupo do fornecedor GUO!* \n\n📱 Whatsapp: +86 181 2218 0753\n Link do grupo: https://chat.whatsapp.com/G5yAyYE1zTC6l5SrLd1Sur \n🗂 Yupoo \n *FOOTBALL*: https://x.yupoo.com/photos/zhouchangliang/albums \n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n   ▪Masculino e feminino: 10$\n   ▪Manga longa: 13$\n▫ Player lisa: 17$ \n▫ Retrô: 15$ ~ 18% \n▫ Kit Infantil: 14$\n\n👖Short:\n   ▫ Fan: 9$\n   ▫ Player: 12$\n🧥 Windbreaker (Corta-Vento): 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n    ▪Conjunto: 42$\n▫ Manga longa\n    ▪ Conjunto: 45$\n \n 🏀NBA: Conferir com o fornecedor (modelos variados) \n \n------------------------------------------ \n *🔠 PERSONALIZAÇÃO 🔠* \n O valor deve ser adicionado ao valor da Jersey\n ▪ Nome + número: ➕ 3$\n ▪ Patch: ➕ 1$\n *TAMANHOS EXTRA*\n 2XL, 3XL, 4XL: + 1$ \n \n \n _Equipe Braza Xports._',
        '/dolarguo': '*LINK DE COMPRA GUO*\nhttps://cutt.ly/W4LVif1',

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