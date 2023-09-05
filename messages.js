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

    gostei: { text: "😍" },

    "gostei porra": { text: "😍🍆🍼" },

    "boa noite!!!": { text: "Olá, filho de uma puta!" },

    "boa noite!": { text: "Olá!" },

    "quero piru": { image: fs.readFileSync("./media/cadu.jpg") },

    "ok cadu.": { text: "😍" },

    cubo: { text: "🤓🏳️‍⚧️" },

    primo: { text: "priminho..." },

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

    // Comandos

    "/ajuda": {
      text: "📱 *COMANDOS DO BOT*\n\n*/tutorial* - Nosso vídeo de tutorial (EM CONSTRUÇÃO)\n*/tamanhos* - Lista de tamanhos das camisas\n*/tamanhos2* - Instruções para escolhas de tamanhos no padrão chinês.\n*/cuidados* - Foto com os cuidados que devem ser tomados com as camisas.\n*/1.1* - Resposta se a camisa tá 1.1\n*/catalogo* - Envia o link de um catálogo que vocês podem utilizar na loja de vocês.",
    },

    // "/tigre": {
    //   text: "*Bem vindo(a) à equipe Tigre Trajado*.\n\nQual o objetivo do grupo?\nCriamos o grupo com a intenção de auxiliar novos importadores no mercado a comprar com os melhores fornecedores, evitando golpes e transtornos envolvendo a qualidade do produto comprado. \n\nCom que tipo de fornecedores lidamos? \nAtualmente temos fornecedores de tailandesas e réplicas de tênis, mas usamos o grupo pra conversar sobre qualquer coisa envolvendo importação.\nNosso linktree: https://linktr.ee/fornecedoresindicados \n\n\nPara mais dúvidas, chame algum administrador ou pergunte no grupo. \n_Equipe Tigre Trajado_",
    // },

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
    // "/dolarkaka": { text: "*LINK DE COMPRA KAKA* \nhttps://www.aliexpress.com/item/1005005410235828.html?spm=5261.ProductManageOnline.0.0.602a4edfQYlhBz" },

    // COMANDOS DESATIVADOS

    // "kaka": { text: "esse é brabo hein! me amarro na dele" },

    // "guo": { text: "gosto muito desse aí hein, compro todo mês" },

    // "royal": { text: "maior da China sem dúvidas, qualidade impecável ㊗️" },

    // "Li Chang": { text: "o braboooooo! Atencioso demais, e muito ativo no grupo. Compro sempre c esse aí" },

    // "/linktree": { text: "https://linktr.ee/fornecedoresindicados" },

    // "/forms": { text: "https://cutt.ly/k4Bmk7R" },

    // "/drive": {
    //   text: "DRIVE AINDA EM PRODUÇÃO",

    // },

    // "/help": {
    //   text: "*COMANDOS BOT DO Tigre - DICAS, OPÇÕES E SUPORTE*\n\n/fornecedores - Nosso linktree com todos os fornecedores \n/tamanhos - Arquivo PDF com a tabela de medidas \n/cuidados - Foto com os cuidados que se devem ter com uma tailandesa \n/linkgrupo - Link do grupo (Dicas, Opções e Suporte) \n/formulario - Link do Forms onde você deve colocar seu ID da ordem. \n/1.1 - Resposta se a camisa tá 1.1 \n/drive - Link do Drive com fornecedores indicados (em progresso)",
    // },

    // "/fornecedores": { text: "https://linktr.ee/fornecedoresdetailandesas" },

    // "/linkgrupo": { text: "https://chat.whatsapp.com/DYs9ycwbwNi6aT64tZxnwe" },

    // "/formulario": { text: "https://cutt.ly/g4BmAdS" },

    // "/tim": {
    //   text: "*Bem vindo(a) ao grupo do TIM - O MAIOR VENDEDOR DE TÊNIS E GRIFE DA CHINA*\n\n📱*CATÁLOGO:* \n\n*CHUTEIRAS*\nhttps://dachang88.x.yupoo.com/albums?tab=gallery \nhttps://qiumishijie.x.yupoo.com/albums?tab=gallery \nhttps://x.yupoo.com/photos/lyzs88/albums?tab=gallery \n\n*GRIFES*\nhttp://ygshoes188.com\n\n*TÊNIS*\nhttps://x.yupoo.com/photos/happydate/albums\nhttps://x.yupoo.com/photos/xiongdimaoyi168/albums?tab=gallery\nhttps://x.yupoo.com/photos\n\n💵 *PREÇOS*: Se informe com o vendedor, cada produto varia o preço. ",
    // },

    // "/tenis": {
    //   text: "Tabela de preços Tim🔥\n\nA melhor do segmento de tênis e chuteiras  🛍️👟\n\n⚠️ PREÇOS APROXIMADOS ⚠️\n\n\n✴️ ADIDAS ✴️\n\nAdidas Streetball: 75$\nAdidas Nite Jogger: 75$\nAdidas EQT BASK: 65$\nAdidas Yeezy 300/350: 59$\nAdidas Ultraboost até 2020: 65$\nAdidas Ultraboost Lançamentos: 75$\nAdidas Superstar básico: 55$\nAdidas Yeezy Slide: 55$\nAdidas NMD: 65$ maioria\nAdidas PW Human Race NMD: 65$\nPharrell x NERD x Adidas NMD Human Race: 65$\n\n❇️ NIKE ❇️\n\nNike Sacai X Nike Blazer: 85$\nNike Undercover X Daybreak: 75$\nNike Sacai x LVD Waffle Daybreak: 75$\nNike React Element 87: 59$\nNike Air Force 1: 65$\nNike Air Vapormax Run Utility: 65$\nNike Off-White x Air Jordan 5: 85$\nNike Off White x N Air Max 90: 75$\nNike Air Max 97: 65$\nNike VaporMax 2.0: 59$\nNike Zoom +2K: 75$\nNike Air Max 1 Travis Scott: 75$\n\n❇️ GUCCI ❇️\n\nGucci Rhyton Vintage Trainer Sneaker: 85$\nGucci Ace Embroidered Low-Top Sneaker: 75$\nGucci Ace Embroidered Low: 75$\n\n❇️ New Balance ❇️\n\nNew Balance: 69$\n\n\n_Equipe Tigre Trajado_",
    // },

    // "/chuteiras": {
    //   text: "Tabela de preços Tim🔥\n\nA melhor do segmento de tênis e chuteiras  🛍️👟\n\n⚠️ PREÇOS APROXIMADOS ⚠️\n\n\n⚽ CHUTEIRAS CAMPO ⚽\n\nNike Phantom GT Elite: 52$\nNike Phantom GT Dynamic Fit: 55$\nNike SuperFly 6 Elite: 55$\nNike SuperFly 7 Elite: 55$\nNike SuperFly 8 Elite: 57$\nNike Vapor 13 Elite: 55$\nNike Vapor 14 Elite: 55$\nNike Tiempo Legend 9 Elite: 52$\nNike Tiempo Legend 8 Elite: 50$\nAdidas X Ghosted FG: 55$\nAdidas X GHOSTED F50 FG 55$\nAdidas Predcopx FG: 55$\nAdidas X Ghosted FG: 55$\nAdidas X Ghosted AG: 50$\nAdidas X Speedflow+: 55$\nAdidas X Speedflow.1 : 54$\nAdidas Predator 20.1 FG: 52$\nAdidas Predator Mutator 20.1 Low FG: 50$\nAdidas Predator Mutator 20+ FG: 55$\nAdidas Predator Accelerator  FG: 55$\nAdidas Predator Freak + FG: 59$\nAdidas Predator Freak.1 MID FG: 57$\nAdidas Predator Freak.1 FG: 55$\nAdidas Predator Edge.1 FG: 59$\nAdidas Predator Edge+ FG: 57$\nAdidas Copa 20.1: 49$\nAdidas Copa Sense+: 57$\nAdidas Copa 20+ FG: 50$\nAdidas Nemezis 19+ FG: 55$\nAdidas Nemezis 19.1 FG: 49$\nPuma Future Z FG: 50$\nMizuno Morelia Neo III FG: 49$\n\n\n⚽ CHUTEIRAS SOCIETY ⚽\n\nNike Phantom GT Pro: 45$\nNike SuperFly 6 Elite: 50$\nNike SuperFly 7 Elite: 50$\nNike SuperFly 8 Elite: 59$\nNike Vapor 13 Elite: 50$\nNike Vapor 14 Pro: 59$\nNike Tiempo Legend 8 Elite: 47$\nNike Tiempo Legend 9 Elite: 47$\nNike Zoom VSN 2 Pro: 49$\nAdidas X Ghosted TF: 45$\nAdidas Copa 20.1 TF: 47$\nPuma Future Z TF: 49$\n\n⚽ CHUTEIRAS SALÃO ⚽\n\nNike Phantom GT Pro: 45$\nNike SuperFly 6 Elite: 49$\nNike SuperFly 7 Elite: 49$\nNike SuperFly 8 Pro: 59$\nNike Zoom VSN 1 e 2 Pro: 45$\nNike React Gato: 47$\nNike Tiempo Legend 8 Elite: 47$\nNike Tiempo Legend 9 Elite: 47$\nNike Tiempo Lunar Legend VIII IC: 45$\nAdidas Predator Mutator 20+ IN: 49$\nMizuno Morelia Neo III TF: 45\nPuma Future Z: ?$\n\n\n_Equipe Tigre Trajado_",
    // },

    // "/jiny": {
    //   text: "*Seja bem-vindo ao grupo do fornecedor JINY*\n\nO fornecedor trabalha com tênis, chuteiras e roupas de grife. Dê uma olhada nos catálogos a seguir: \n\n*TÊNIS DIVERSOS*:\nhttps://gm1688.x.yupoo.com/albums\nhttp://pthjf398510039.x.yupoo.com/albums\nhttps://wx888888.x.yupoo.com\nhttps://424334770.x.yupoo.com\nhttps://feiyumaoyi66666.x.yupoo.com/albums\nhttps://aishang911.x.yupoo.com/albums\nhttps://feiyue889.x.yupoo.com\nhttp://xh6181.x.yupoo.com/albums\nhttp://ygshoes188.com\nhttps://x.yupoo.com/photos/qinghong666/albums\n\n*CHUTEIRAS / TÊNIS DE BASQUETE:*\nhttps://xy0594xy.x.yupoo.com\nhttp://x.yupoo.com/photos/qiumishijie/albums\n\n*TÊNIS INFANTIS*:\nhttps://zhujiangniao.x.yupoo.com/albums/77329376?uid=1&referrercate=850261\n\n*GRIFES*:\nhttps://zhujiangniao.x.yupoo.com/albums/19735482?uid=1&referrercate=849263",
    // },
    // "/royal": {
    //   text: "*Bem vindo(a) ao grupo do ROYAL SPORTS!* \n\n📱 Whatsapp: +86 135 3997 8787\n\nLink do grupo: https://chat.whatsapp.com/H5qkZYio99O1NRbZdWuNgO \n\n🗂 Yupoo: http://goo.gl/e7KEAd\n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n▪Masculino e feminino: 12$\n▪Manga longa: 14$\n▫ Player lisa:\n▪Adidas: 15$\n▪Puma: 16$\n▪Nike: 18$\n▫ Retrô: 15$\n👶 Kit Infantil: 12$\n\n👖Short:\n▫ Fan: 8$\n▫ Player: 12$\n🧦 Meia: 3$ - 6$\n🧥 Windbreaker (Corta-Vento): 28$ a 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n ▪Conjunto: 42$\n▫ Manga longa\n ▪ Conjunto: 45$\n  ------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Tigre Trajado._",
    // },

    // "/dolarroyal": {
    //   text: "*LINK DE COMPRA ROYAL*\nhttps://www.aliexpress.com/item/1005005313639135.html",
    // },

    // "/curry": {
    //   text: "*Bem vindo(a) ao grupo do fornecedor CURRY!* \n\n📱 Whatsapp: +86 181 2218 0753\n\nLink do grupo: https://chat.whatsapp.com/CqYP1oN27sX7Y06JYCm1gs \n\n🗂 Yupoo \n*FOOTBALL*: https://cutt.ly/k4LZb8Q \n*NBA*: https://cutt.ly/F4LZTCk \n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n▪Masculino e feminino: 10$\n▪Manga longa: 14$\n*OBS: PROMOÇÃO*\n3 CAMISAS FAN POR 30$ + FRETE GRÁTIS \n4 CAMISAS FAN POR 38$ + FRETE GRÁTIS \n5 CAMISAS FAN POR 45$ + FRETE GRÁTIS \n▫ Player lisa:\n▪Adidas: 13$\n▪Puma: 16$\n▪Nike: 16$\n▫ Retrô: 16$\n▫ Kit Infantil: 14$\n\n👖Short:\n▫ Fan: 8$\n▫ Player: 12$\n🧦 Meias: 3$ - 7$\n🧥 Windbreaker (Corta-Vento): 28$ a 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n ▪Conjunto: 42$\n▫ Manga longa\n ▪ Conjunto: 45$\n\n🏀NBA: $19 \n\n------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Tigre Trajado._",
    // },

    // "/dolarcurry": { text: "*LINK DE COMPRA CURRY*\nhttps://pt.aliexpress.com/item/1005005473365814.html?spm=5261.ProductManageOnline.0.0.697a4edfEmrpmQ&gatewayAdapt=glo2bra" },

    // Trajado

    // "/guo": {
    //   text: "*Bem vindo(a) ao grupo do fornecedor GUO!* \n\n📱 Whatsapp: +86 181 2218 0753\n\nLink do grupo: https://chat.whatsapp.com/G5yAyYE1zTC6l5SrLd1Sur \n\n🗂 Yupoo \n*FOOTBALL*: https://x.yupoo.com/photos/zhouchangliang/albums \n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n▪Masculino e feminino: 10$\n▪Manga longa: 13$\n▫ Player lisa:\n▪Adidas: 15$\n▪Puma: 15$\n▪Nike: 17$\n\n▫ Retrô: 15$ ~ 18$ \n▫ Kit Infantil: 14$\n\n👖Short:\n▫ Fan: 9$\n▫ Player: 12$\n🧥 Windbreaker (Corta-Vento): 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n ▪Conjunto: 42$\n▫ Manga longa\n ▪ Conjunto: 45$\n\n🏀NBA: Conferir com o fornecedor (modelos variados) \n\n------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Tigre Trajado._",
    // },

    // "/dolarguo": { text: "*LINK DE COMPRA GUO*\nhttps://cutt.ly/W4LVif1" },

    // "/lisa": {
    //   text: "*Bem vindo(a) ao grupo da LISA - O DÓLAR MAIS BARATO DA CHINA*\n\n🗂 Catálogo: https://camisetafutbol.x.yupoo.com/albums?tab=gallery \n\n*Como Funciona?*\nA Lisa opera por um meio diferente dos demais fornecedores. Ela tem banco no Brasil e aceita pagamentos via Pix diretamente, além de também aceitar por boleto e Western Union Remittance. Isso é um diferencial, *pois o dólar sai BEEEEEM mais barato que o da Aliexpress.* \n\n💵 *VALORES:*\n\n👕 *CAMISAS* \n\n👕 Modelo Fan: 12$\n\n👕 Modelo Player\n  ▫ Nike/Puma: 16$\n  ▫ Adidas: 14$\n\n👕 Retro:\n  ▫ Normal: 16$\n  ▫ Manga Longa: 18$\n\n👶 Kit Infantil: 12$\n▫ Polo:13$\n🧥➕👖 Kit Treino: 40/45$\n👖 Short: 9$\n\n🏀 NBA: 18$ Bordada, 20$ Silk\n🤾‍♂️ NFL: 22$ \n\n👚*CUSTOMIZAÇÃO*: 3$\n\n*👕 TAMANHOS EXTRAS*\n  ▫2XL: 2$\n  ▫3XL: 3$\n\n🚚 *FRETE*\n👕 = 5$\n👕👕 = 3$\n👕👕👕+ = *GRÁTIS!*\n\n_Equipe Tigre Trajado_",
    // },

    // "/dolarlisa": {
    //   text: "O dólar da Lisa é bem próximo da cotação real do dólar. Entre em contato com a fornecedora que ela te informará a cotação diária.",
    // },

    // "/lichang": {
    //   text: "LI CHANG \n🗂️https://royal-sports.x.yupoo.com/\n🗂️https://vpi123.x.yupoo.com/\n\n👕Fan lisa:10$\n👕Retro:18$\n👕Nike player:18$\n🥼Manga longa:15$\n🏀NBA Silk:20$\n🩳Short NBA:20$\n🏈NFL:25$/35$\n🧥Corta vento:36$\n🧥Kit treinamento:40$\n🧥Jaqueta:36$\n👶Kit infantil:13$\n🔠Personalização:3$\n🥇Patch:1$ (cada)\n\n✈️Frete:👇\n1👕:5$\n2👕👕:4$\n3👕👕👕:3$\n4👕👕👕👕:Frete grátis + 1 chaveiro\n\n_Equipe Tigre Trajado_",
    // },

    // "/dolarlichang": {
    //   text: "*LINK DE PAGAMENTO LICHANG* \n\nhttps://www.aliexpress.com/item/1005005459337469.html?spm=5261.ProductManageOnline.0.0.45be71976Z9sn3",
    // },

    // "/jeff": {
    //   text: "FORNECEDORA JEFF JERSEYS \n\nContato: +86 158 1339 7374 \n\nCatálogo: https://camisetafutbol.x.yupoo.com/albums \n\n❇ Camisa Fan 10$ \n❇ Camisa Fan manga longa 14$ \n❇ Camisa Player Adidas 13$ \n❇ Camisa Player Nike 15$ \n♦ Kit infantil 12$ \n♦ Adultos kit Camisa 18$ \n♦ Camisas Retrô 16$ \n👖 Calções/Shorts 10$ \n❇ Camisas NFL 21$ \n❇ Personalização 3$ \n❇ Tamanho 2XL,1$ 3XL 2$ \n❇ NBA 21$    \nFrete por peças \n1 Peça = 5$ \n2 Peças = 4$ \n3 Peças = 3$\n4 Peças = 2$\n5 Peças Frete grátis HK / Epacket\n\n✔ PAGAMENTO VIA ALIEXPRESS SUA COMPRA GARANTIDA.\n\n_Equipe Tigre Trajado_",
    // },

    // "/dolarjeff": {
    //   text: "LINK PAGAMENTO JEFF\n\nhttps://www.aliexpress.com/item/1005005174156888.html?spm=5261.ProductManageOnline.0.0.19c14edfLVtahp",
    // },

    // "/zifeng": {
    //   text: "*BEM-VINDO*\n\n🈺 FORNECEDOR *ZI FENG* +8615989179099\n\n📓 CATÁLOGO: https://194939.x.yupoo.com/\n\n👕 *CAMISAS DE FUTEBOL*\nFAN $12 / A PARTIR DE 3 $11\nPLAYER $14 ADIDAS / $16 NIKE\nMANGA LONGA $16\nRETRÔ $14\nKIT INFANTIL $12\n\n🧥 *OUTROS*\nKIT TREINO $31 A $40\nSHORT $9\nMEIÕES $5\nCAMISA POLO $13\nCORTA-VENTO $29\n\n➕ *ADICIONAIS:*\nPERSONALIZAR +$2\nPERSONALIZAÇÃO PHOTOSHOP +$4\nTAM. 2XL +$1\nTAM. 3XL E 4XL +$2\nPATCH +$0,50\n\n\n⛹️ *CAMISAS DE BASQUETE / FUTEBOL AMERICANO*\nFAN $17~18 / JOGADOR $22 / RETRO $21\nNFL $27\n\n🛩️ *FRETE*\n01 PEÇA +$3 \n02 PEÇAS OU MAIS *FRETE GRÁTIS*\n\n_Equipe Tigre Trajado_",
    // },

    // "/dolarzifeng": {
    //   text: "LINK DE PAGAMENTO ZIFENG:\n\nhttps://cutt.ly/Q73B0r5",
    // },

    // "/mo": {
    //   text: "MO YAOQUAN  \n\n📲 Catálogos: \nhttps://a15707508070.x.yupoo.com/albums\nhttps://royal-sports.x.yupoo.com/albums\nhttps://minkang.x.yupoo.com/\n\n⚠ 5 camisas $46 ⚠  \n\n👕 Fan 10$\n👕 Player  Adidas 14$ Nike16$\n💻 Personalização = 2$\n📏 Tamanho XXL,XXXL=1$\n👕 Camisa Manga Longa =15$\n🎽 Retrô = 16$ \n👦🏻 Kit Infantil = 13$\n🩳 Shorts = 8$\n🧦 Meiões = 6$\n🏀 Embroidery NBA shirt= 18$ \n\n🧥 Corta-vento = 30$\n👖 Calça de Treino = 18$\n👕👖Kit de Treino  Manga Curta=27$\n👕👖Kit de Treino  Manga Longa= 34$ \n\nFRETE POR ALIEXPRESS ✈\n\n1👕=4$\n2👕=3$\n3Camisas  Frete Grátis\n\n_Equipe Tigre Trajado_",
    // },

    // "/dolarmo": {
    //   text: "LINK DE PAGAMENTO MO YAOQUAN:\n\nhttps://www.aliexpress.com/item/1005005048417491.html?spm=5261.ProductManageOnline.0.0.15744edfV45sSq",
    // },

    // "/zhou": {
    //   text: "⚽🏆Bem vindo ao grupo ❄👑\n\n👕 Vendedor: ZHOU\n📞 Contato:+86 15014299983\n📲 Catálogo: https://zhouchangliang.x.yupoo.com/albums\n👕Flamenco em casa Fã Lisa  = $10\n👕Camisa Player  = Adidas 13$ Nike16$ \nNome + número，Custom=3$\n💻Personalização = 1$\n📏Tamanho XXL、XXXL=1$\n👕Camisa de Manga Longa =14$\n🎽Retrô = 16$ \n👦🏻Kit  Infantil = 14 $\nShorts = 8$ \nNBA shirt= 22$\n🧥Corta-vento = 35$\nCorta-vento Kit de Treino=43$\n👖 Calça de Treino = 18$\n👕👖Kit de Treino  Manga Curta=28$ \n👕👖Kit de Treino  Manga Longa= 35$ \nValores de envio \n1 camisa = 5$\n2 camisas= 4$\n3 camisas= 2$\n4 camisas frete grátis .\n💰 Pagamento = Aliexpres, via ou WESTERN UNION 💰\n\n_Equipe Tigre Trajado_",
    // },

    // "/dolarzhou": {
    //   text: "LINK DE PAGAMENTO ZHOU:\n\nhttps://www.aliexpress.com/item/1005005166932715.html?spm=5261.ProductManageOnline.0.0.15564edfOwmOjA",
    // },

    // "/xiaoming": {
    //   text: "🇨🇳🇧🇷 XIAO MING 🇧🇷🇨🇳\n\nhttps://16620059194.x.yupoo.com/\n👕Camisa Fan = $10\n👕Camisa Player  = Adidas 13$ Nike16$ \n🔟Personalização (nome e número) =3$\n💻Patch = 1$\n*tamanho XXL=1$ \n*tamanho XXXL=2$\n👕Camisa de Manga Longa =13$\n🎽Retrô = 16$ \n👦🏻Kit  Infantil = 13 $\n\n🩳Shorts = 8$ \n🩳NBA = 20$ - 23$\n🧥Corta-vento = 36$-38$\n🧥Corta-vento Kit de Treino=43$\n👖 Calça de Treino = 18$\n👕👖Kit de Treino  Manga Curta=26$ \n👕👖Kit de Treino  Manga Longa= 32$\n📦👕1 Camisa - Frete = 5$\n📦👕2 Camisas - Frete = 4$\n📦👕3 Camisas - Frete= 3$\n📦👕4 Camisas - Frete = GRÁTIS\nEquipe Tigre Trajado_",
    // },

    // "/dolarxiaoming": {
    //   text: "LINK DE PAGAMENTO XIAO MING:\n\nhttps://www.aliexpress.com/item/1005005202510659.html?spm=5261.ProductManageOnline.0.0.577f4edfp4QXr7",
    // },

    // "/simon": {
    //   text: "BEM VINDO AO GRUPO SIMON\n\n📔CATALOG 👇🏻\nhttps://abcd1234fei.x.yupoo.com/albums\n\n🩳 Shorts $8\n👕 Fan shirt $11\n👕 Adidas Player $15\n👕 Nike Player $16\n👶🏻 Children‘s Kit $13\n🧥 Long Sleeve $14\n👕 Retro $16 \n🧔🏻 Adult Kit $18\n🏀 NBA Silk $21\n🔰 Patch $1\n📏 Size 2XL+$1， 3XL +$2/ 4XL $3\n🔠 Custom $3\nFREIGHT\n1 shirt +$ 5 ✈️\n2 shirts +$4 ✈️\n3 shirts + $3 ✈️\n4 shirts + $2 ✈️\n5 shirts free + 1 chaveiro grátis\nFree shipping key chain🔑\n\n📌Facebook:\nhttps://www.facebook.com/profile.php?id=100090008982630&mibextid=ZbWKwL\n\n\n+Equipe Tigre Trajado_",
    // },

    // "/dolarsimon": {
    //   text: "LINK DE PAGAMENTO SIMON:\n\nhttps://www.aliexpress.com/item/1005005179877604.html",
    // },

    // "/cici": {
    //   text: "SEJA BEM-VINDO AO GRUPO  CICI\n\n*5 CAMISAS - 1 CHAVEIRO GRÁTIS* \n\n✅𝗙𝗔𝗡 = $ 8 ⚠️\n✅3 𝗖𝗔𝗠𝗜𝗦𝗔𝗦 𝗙𝗥𝗘𝗧𝗘 𝗚𝗥𝗔𝗧𝗜𝗦 \n✅𝗖𝗔𝗠𝗜𝗦𝗔𝗦 𝗧𝗔𝗜𝗟𝗔𝗡𝗗𝗘𝗦𝗔𝗦 \n✅𝗗𝗜𝗥𝗘𝗧𝗢 𝗗𝗢 𝗙𝗢𝗥𝗡𝗘𝗖𝗘𝗗𝗢𝗥 \n✅𝗤𝗨𝗔𝗟𝗜𝗗𝗔𝗗𝗘 𝟭:𝟭 \n✅𝗣𝗔𝗚𝗔𝗠𝗘𝗡𝗧𝗢 𝗔𝗟𝗜𝗘𝗫𝗣𝗥𝗘𝗦𝗦 \n✅𝗘𝗡𝗧𝗥𝗘𝗚𝗔 𝟯 𝗔 𝟱 𝗗𝗜𝗔𝗦\n\n🔗 𝑳𝒊𝒏𝒌 𝒅𝒐 𝒈𝒓𝒖𝒑𝒐 de suporte:\nhttps://chat.whatsapp.com/DYs9ycwbwNi6aT64tZxnwe\n\n🔗 𝑳𝒊𝒏𝒌 𝒅𝒐 𝒈𝒓𝒖𝒑𝒐 𝑭𝒂𝒄𝒆𝒃𝒃𝒐𝒌:\nhttps://www.facebook.com/groups/598138121873154/?ref=share\n\n\n_Equipe Tigre Trajado_",
    // },

    // "/alice": {
    //   text: "⚠️ 3 peças frete grátis + chaveiro de brinde ❤️\n\n\nCatalogo:\nhttps://alicejersey.x.yupoo.com/\n\n👕Fan $11\n👕Player (Adidas $14 / Nike $18)\n🥼Manga Longa $14\n👶Kit infantil $13\n👔Retrô $15\n📏Tamanho 2XL +$1 / 3XL +$2\n🔟Personalizar +$3\n📌Patch +$1\n👕Polo $14\n🩳Shorts $9\n🧦Meias $3\nKit Treino $38\nKit Jaqueta $45 \nKit Jaqueta Capuz $48\n\n🏀NBA Bordada $18\n🏀NBA Silk $21\n\n✈️Frete (NA-BR)\n1 Camisa - Frete $4\n2 Camisas - Frete $3\n3 Camisas - Frete Grátis\n\n\n_Equipe Tigre Trajado_",
    // },

    // "/dolaralice": {
    //   text: "LINK DE PAGAMENTO ALICE:\n\nhttps://pt.aliexpress.com/item/1005005263185864.html",
    // },}
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
