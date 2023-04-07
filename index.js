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
        'Bom dia!!!':'Bom dia meu amor!',
        '...':'Aiiiiii... que ódiooo!!',
        '/boanoitevine' : MessageMedia.fromFilePath('./cadu.jpg'),

        // COMANDOS BOT BRAZA
        '/ajuda': '📱 *COMANDOS BOT DO BRAZA*\n\n*/braza* - Informações a respeito da equipe Braza \n*/linktree* - Link do nosso linktree \n*/tutorial* - Nosso vídeo de tutorial (mande apenas uma vez, pode demorar a enviar) \n*/tamanhos* - Lista de tamanhos das camisas \n*/cuidados* - Foto com os cuidados que devem ser tomados com as camisas.  \n*/forms* - Link do Forms (BRAZA XPORTS) onde você deve colocar seu ID da ordem. \n*/1.1* - Resposta se a camisa tá 1.1 \n*/drive* - Link do Drive com fornecedores indicados (em progresso)\n\n*COM FORNECEDORES* \n\n*/kaka* - Informações do fornecedor KAKA\n*/dolarkaka* - Link de pagamento do KAKA \n\n*/royal* - Informações do fornecedor ROYAL \n*/dolarroyal* - Link de pagamento do fornecedor ROYAL\n\n_E segue neste padrão para os fornecedores Curry e Guo_',
        '/braza': '*Bem vindo(a) à equipe BRAZA XPORTS*.\n\nQual o objetivo do grupo?\nCriamos o grupo com a intenção de auxiliar novos importadores no mercado a comprar com os melhores fornecedores, evitando golpes e transtornos envolvendo a qualidade do produto comprado. \n\nCom que tipo de fornecedores lidamos? \nAtualmente temos fornecedores de tailandesas e réplicas de tênis, mas usamos o grupo pra conversar sobre qualquer coisa envolvendo importação.\nNosso linktree: https://linktr.ee/fornecedoresindicados \n\n\nPara mais dúvidas, chame algum administrador ou pergunte no grupo. \n_Equipe Braza Xports_',
        '/linktree':'https://linktr.ee/fornecedoresindicados',
        '/tutorial': '*LINK DO TUTORIAL NO YOUTUBE* \n\nhttps://youtu.be/t4ErU0BeKx4',
        '/tamanhos': MessageMedia.fromFilePath('./Tamanhos.pdf'),
        '/cuidados': MessageMedia.fromFilePath('./cuidados.jpg'),
        '/catalogo': '*LINK PARA O NOSSO CATÁLOGO:* \n\n https://drive.google.com/file/d/1PUudBxcqFalu9ps7BdE-AUZ8amQvSWbz/view',
        '/diegobritto': MessageMedia.fromFilePath('./diegobritto.jpeg'),
        '/voli': MessageMedia.fromFilePath('./voli.jpg'),
        '??':'!!',

        '/kaka': '*Bem vindo(a) ao KAKA SHOP!* \n\n📱 Whatsapp: +86 159 7596 2575\n\nLink do grupo: https://chat.whatsapp.com/JXH5DMdHAMW1gdqoLSe8sX\n\n🗂 Yupoo: https://kakahuaze123.x.yupoo.com/\n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n ▪Masculino e feminino: 10$\n ▪Manga longa: 14$\n *OBS: PROMOÇÃO - 5 CAMISAS FAN POR 48$*\n▫ Player lisa:\n ▪Adidas: 13$\n ▪Puma: 16$\n ▪Nike: 16$\n▫ Retrô: 16$\n▫ Kit Infantil: 14$\n\n👖Short:\n ▫ Fan: 8$\n ▫ Player: 12$\n🧦 Meia: 3$ - 6$\n🧥 Windbreaker (Corta-Vento): 35$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n  ▪Conjunto: 28$\n▫ Manga longa\n  ▪ Conjunto: 45$\n   ------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Braza Xports._',
        '/dolarkaka' : '*LINK DE COMPRA KAKA* \nhttps://cutt.ly/h4LKwCg',

        '/royal' : '*Bem vindo(a) ao grupo do ROYAL SPORTS!* \n\n📱 Whatsapp: +86 135 3997 8787\n\nLink do grupo: https://chat.whatsapp.com/H5qkZYio99O1NRbZdWuNgO \n\n🗂 Yupoo: http://goo.gl/e7KEAd\n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n ▪Masculino e feminino: 12$\n ▪Manga longa: 14$\n▫ Player lisa:\n ▪Adidas: 15$\n ▪Puma: 16$\n ▪Nike: 18$\n▫ Retrô: 15$\n👶 Kit Infantil: 12$\n\n👖Short:\n ▫ Fan: 8$\n ▫ Player: 12$\n🧦 Meia: 3$ - 6$\n🧥 Windbreaker (Corta-Vento): 28$ a 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n  ▪Conjunto: 42$\n▫ Manga longa\n  ▪ Conjunto: 45$\n   ------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Braza Xports._',
        '/dolarroyal':'*LINK DE COMPRA ROYAL*\nhttps://www.aliexpress.com/item/1005005313639135.html',
        
        '/curry': '*Bem vindo(a) ao grupo do fornecedor CURRY!* \n\n📱 Whatsapp: +86 181 2218 0753\n\nLink do grupo: https://chat.whatsapp.com/CqYP1oN27sX7Y06JYCm1gs \n\n🗂 Yupoo \n*FOOTBALL*: https://cutt.ly/k4LZb8Q \n*NBA*: https://cutt.ly/F4LZTCk \n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n ▪Masculino e feminino: 10$\n ▪Manga longa: 14$\n*OBS: PROMOÇÃO*\n 3 CAMISAS FAN POR 30$ + FRETE GRÁTIS \n 4 CAMISAS FAN POR 38$ + FRETE GRÁTIS \n 5 CAMISAS FAN POR 45$ + FRETE GRÁTIS \n▫ Player lisa:\n ▪Adidas: 13$\n ▪Puma: 16$\n ▪Nike: 16$\n▫ Retrô: 16$\n▫ Kit Infantil: 14$\n\n👖Short:\n ▫ Fan: 8$\n ▫ Player: 12$\n🧦 Meias: 3$ - 7$\n🧥 Windbreaker (Corta-Vento): 28$ a 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n  ▪Conjunto: 42$\n▫ Manga longa\n  ▪ Conjunto: 45$\n\n🏀NBA: $19 \n\n------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Braza Xports._',
        '/dolarcurry': '*LINK DE COMPRA CURRY*\nhttps://cutt.ly/s4LFXA6',

        '/guo': '*Bem vindo(a) ao grupo do fornecedor GUO!* \n\n📱 Whatsapp: +86 181 2218 0753\n\nLink do grupo: https://chat.whatsapp.com/G5yAyYE1zTC6l5SrLd1Sur \n\n🗂 Yupoo \n*FOOTBALL*: https://x.yupoo.com/photos/zhouchangliang/albums \n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n ▪Masculino e feminino: 10$\n ▪Manga longa: 13$\n▫ Player lisa:\n ▪Adidas: 15$\n ▪Puma: 15$\n ▪Nike: 17$\n\n▫ Retrô: 15$ ~ 18$ \n▫ Kit Infantil: 14$\n\n👖Short:\n ▫ Fan: 9$\n ▫ Player: 12$\n🧥 Windbreaker (Corta-Vento): 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n  ▪Conjunto: 42$\n▫ Manga longa\n  ▪ Conjunto: 45$\n\n🏀NBA: Conferir com o fornecedor (modelos variados) \n\n------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Braza Xports._',
        '/dolarguo': '*LINK DE COMPRA GUO*\nhttps://cutt.ly/W4LVif1',

        '/lisa': '*Bem vindo(a) ao grupo da LISA - O DÓLAR MAIS BARATO DA CHINA*\n\n🗂 Catálogo: https://camisetafutbol.x.yupoo.com/albums?tab=gallery \n\n*Como Funciona?*\nA Lisa opera por um meio diferente dos demais fornecedores. Ela tem banco no Brasil e aceita pagamentos via Pix diretamente, além de também aceitar por boleto e Western Union Remittance. Isso é um diferencial, *pois o dólar sai BEEEEEM mais barato que o da Aliexpress.* \n\n💵 *VALORES:*\n\n👕 *CAMISAS* \n\n👕 Modelo Fan: 12$\n\n👕 Modelo Player\n   ▫ Nike/Puma: 16$\n   ▫ Adidas: 14$\n\n👕 Retro:\n   ▫ Normal: 16$\n   ▫ Manga Longa: 18$\n\n👶 Kit Infantil: 12$\n▫ Polo:13$\n🧥➕👖 Kit Treino: 40/45$\n👖 Short: 9$\n\n🏀 NBA: 18$ Bordada, 20$ Silk\n🤾‍♂️ NFL: 22$ \n\n👚*CUSTOMIZAÇÃO*: 3$\n\n*👕 TAMANHOS EXTRAS*\n   ▫2XL: 2$\n   ▫3XL: 3$\n\n🚚 *FRETE*\n👕 = 5$\n👕👕 = 3$\n👕👕👕+ = *GRÁTIS!*\n\n_Equipe Braza Xports_',
        '/dolarlisa':'O dólar da Lisa é bem próximo da cotação real do dólar. Entre em contato com a fornecedora que ela te informará a cotação diária.',

        '/lichang':'LI CHANG\n🗂https://royal-sports.x.yupoo.com/\n🗂https://vpi123.x.yupoo.com/\n\n👕 PROMOÇÃO: 5 FAN POR 49$ \n\n👕Fan lisa:10$\n👕Retro:18$\n👕Nike player:18$\n🥼Manga longa:15$\n🏀NBA Silk:20$\n🩳Short NBA:20$\n🏈NFL:25$/35$\n🧥Corta vento:36$\n🧥Kit treinamento:40$\n🧥Jaqueta:36$\n👶Kit infantil:13$\n🔠Personalização:3$\n🥇Patch:1$ (cada)\n\n✈Frete:👇\n1👕:5$\n2👕👕:4$\n3👕👕👕:3$\n4👕👕👕👕:Frete grátis\n\n_Equipe Braza Xports_',

        '/jeff':'FORNECEDORA JEFF JERSEYS \n\nContato: +86 158 1339 7374 \n\nCatálogo: https://camisetafutbol.x.yupoo.com/albums \n\n❇ Camisa Fan 10$ \n❇ Camisa Fan manga longa 14$ \n❇ Camisa Player Adidas 13$ \n❇ Camisa Player Nike 15$ \n♦ Kit infantil 12$ \n♦ Adultos kit Camisa 18$ \n♦ Camisas Retrô 16$ \n👖 Calções/Shorts 10$ \n❇ Camisas NFL 21$ \n❇ Personalização 3$ \n❇ Tamanho 2XL,1$ 3XL 2$ \n❇ NBA 21$    \nFrete por peças \n1 Peça = 5$ \n2 Peças = 4$ \n3 Peças = 3$\n4 Peças = 2$\n5 Peças Frete grátis HK / Epacket\n\n✔ PAGAMENTO VIA ALIEXPRESS SUA COMPRA GARANTIDA.\n\n_Equipe Braza Xports_',
        '/dolarjeff':'LINK PAGAMENTO JEFF\n\nhttps://www.aliexpress.com/item/1005005174156888.html?spm=5261.ProductManageOnline.0.0.19c14edfLVtahp',

        '/tim':'*Bem vindo(a) ao grupo do TIM - O MAIOR VENDEDOR DE TÊNIS E GRIFE DA CHINA*\n\n📱*CATÁLOGO:* \n\n*CHUTEIRAS*\nhttps://dachang88.x.yupoo.com/albums?tab=gallery \nhttps://qiumishijie.x.yupoo.com/albums?tab=gallery \nhttps://x.yupoo.com/photos/lyzs88/albums?tab=gallery \n\n*GRIFES*\nhttp://ygshoes188.com\n\n*TÊNIS*\nhttps://x.yupoo.com/photos/happydate/albums\nhttps://x.yupoo.com/photos/xiongdimaoyi168/albums?tab=gallery\nhttps://x.yupoo.com/photos\n\n💵 *PREÇOS*: Se informe com o vendedor, cada produto varia o preço. ',

        '/mo':'MO YAOQUAN  \n\n📲 Catálogos: \nhttps://a15707508070.x.yupoo.com/albums\nhttps://royal-sports.x.yupoo.com/albums\nhttps://minkang.x.yupoo.com/\n\n⚠ 5 camisas $46 ⚠  \n\n👕 Fan 10$\n👕 Player  Adidas 14$ Nike16$\n💻 Personalização = 2$\n📏 Tamanho XXL,XXXL=1$\n👕 Camisa Manga Longa =15$\n🎽 Retrô = 16$ \n👦🏻 Kit Infantil = 13$\n🩳 Shorts = 8$\n🧦 Meiões = 6$\n🏀 Embroidery NBA shirt= 18$ \n\n🧥 Corta-vento = 30$\n👖 Calça de Treino = 18$\n👕👖Kit de Treino  Manga Curta=27$\n👕👖Kit de Treino  Manga Longa= 34$ \n\nFRETE POR ALIEXPRESS ✈\n\n1👕=4$\n2👕=3$\n3Camisas  Frete Grátis\n\n_Equipe Braza Xports_',
        '/dolarmo':'LINK DE PAGAMENTO MO YAOQUAN:\n\nhttps://www.aliexpress.com/item/1005005048417491.html?spm=5261.ProductManageOnline.0.0.15744edfV45sSq',

        '/forms':'https://cutt.ly/k4Bmk7R',

        '/drive': 'https://drive.google.com/drive/folders/1Uqys8AL3bdGCw6UXt-wj3sWTsXla43xX?usp=share_link',

        '/1.1':'Se saiu tem pouco tempo, é por sua conta e risco! Ninguém acerta de primeira, não seria um chinês que mudaria essa história. \n\nAguarde pelo menos 1 mês após o lançamento para efetuar a compra se quer comprar sem riscos.',

        // COMANDOS BOT DICAS OPÇÕES E SUPORTE

        '/help' : "*COMANDOS BOT DO BRAZA - DICAS, OPÇÕES E SUPORTE*\n\n/fornecedores - Nosso linktree com todos os fornecedores \n/tamanhos - Arquivo PDF com a tabela de medidas \n/cuidados - Foto com os cuidados que se devem ter com uma tailandesa \n/linkgrupo - Link do grupo (Dicas, Opções e Suporte) \n/formulario - Link do Forms onde você deve colocar seu ID da ordem. \n/1.1 - Resposta se a camisa tá 1.1 \n/drive - Link do Drive com fornecedores indicados (em progresso)",
        '/fornecedores' : 'https://linktr.ee/fornecedoresdetailandesas',
        '/linkgrupo' : 'https://chat.whatsapp.com/DYs9ycwbwNi6aT64tZxnwe',
        '/formulario' : 'https://cutt.ly/g4BmAdS' 
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