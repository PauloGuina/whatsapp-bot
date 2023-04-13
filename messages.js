const fs = require("fs");

const message_list = {
  "boa noite!!!": { text: "Olá, filho de uma puta!" },

  "boa noite!": { text: "Olá!" },

  "quero piru": {
    image: fs.readFileSync("./media/cadu.jpg"),
  },

  "...": { text: "Aiiiiii... que ódiooo!!" },

  "ken pelado": {
    image: fs.readFileSync("./media/cadu.jpg"),
  },

  "@bryannunnes": {
    image: fs.readFileSync("./media/bryannunnes.jpg"),
  },

  "/ajuda": {
    text: "📱 *COMANDOS BOT DO BRAZA*\n\n*/braza* - Informações a respeito da equipe Braza \n*/linktree* - Link do nosso linktree \n*/tutorial* - Nosso vídeo de tutorial (mande apenas uma vez, pode demorar a enviar) \n*/tamanhos* - Lista de tamanhos das camisas \n*/cuidados* - Foto com os cuidados que devem ser tomados com as camisas.  \n*/forms* - Link do Forms (BRAZA XPORTS) onde você deve colocar seu ID da ordem. \n*/1.1* - Resposta se a camisa tá 1.1 \n*/drive* - Link do Drive com fornecedores indicados (em progresso)\n\n*COM FORNECEDORES* \n\n*/kaka* - Informações do fornecedor KAKA\n*/dolarkaka* - Link de pagamento do KAKA \n\n*/royal* - Informações do fornecedor ROYAL \n*/dolarroyal* - Link de pagamento do fornecedor ROYAL\n\n_E segue neste padrão para os fornecedores Curry e Guo_",
  },

  "/braza": {
    text: "*Bem vindo(a) à equipe BRAZA XPORTS*.\n\nQual o objetivo do grupo?\nCriamos o grupo com a intenção de auxiliar novos importadores no mercado a comprar com os melhores fornecedores, evitando golpes e transtornos envolvendo a qualidade do produto comprado. \n\nCom que tipo de fornecedores lidamos? \nAtualmente temos fornecedores de tailandesas e réplicas de tênis, mas usamos o grupo pra conversar sobre qualquer coisa envolvendo importação.\nNosso linktree: https://linktr.ee/fornecedoresindicados \n\n\nPara mais dúvidas, chame algum administrador ou pergunte no grupo. \n_Equipe Braza Xports_",
  },

  "/linktree": { text: "https://linktr.ee/fornecedoresindicados" },

  "/tutorial": {
    text: "*LINK DO TUTORIAL NO YOUTUBE* \n\nhttps://youtu.be/t4ErU0BeKx4",
  },

  "/tamanhos": {
    text: "*LINK DO PDF DA TABELA DE TAMANHOS*: \n\nhttps://drive.google.com/file/d/1GtoQksDfL3lqf5wKDV1ZFJgQKaP10RTS/view?usp=share_link",
  },

  "/cuidados": { image: fs.readFileSync("./media/cuidados.jpg") },

  "/catalogo": {
    text: "*LINK PARA O NOSSO CATÁLOGO:* \n\n https://drive.google.com/file/d/1PUudBxcqFalu9ps7BdE-AUZ8amQvSWbz/view",
  },

  "/diegobritto": { image: fs.readFileSync("./media/diegobritto.jpeg") },

  "/voli": { image: fs.readFileSync("./media/voli.jpg") },

  "??": { text: "!!" },

  "/kaka": {
    text: "*Bem vindo(a) ao KAKA SHOP!* \n\n📱 Whatsapp: +86 159 7596 2575\n\nLink do grupo: https://chat.whatsapp.com/JXH5DMdHAMW1gdqoLSe8sX\n\n🗂 Yupoo: https://kakahuaze123.x.yupoo.com/\n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n ▪Masculino e feminino: 10$\n ▪Manga longa: 14$\n *OBS: PROMOÇÃO - 5 CAMISAS FAN POR 48$*\n▫ Player lisa:\n ▪Adidas: 13$\n ▪Puma: 16$\n ▪Nike: 16$\n▫ Retrô: 16$\n▫ Kit Infantil: 14$\n\n👖Short:\n ▫ Fan: 8$\n ▫ Player: 12$\n🧦 Meia: 3$ - 6$\n🧥 Windbreaker (Corta-Vento): 35$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n  ▪Conjunto: 28$\n▫ Manga longa\n  ▪ Conjunto: 45$\n   ------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Braza Xports._",
  },

  "/dolarkaka": { text: "*LINK DE COMPRA KAKA* \nhttps://cutt.ly/h4LKwCg" },

  "/royal": {
    text: "*Bem vindo(a) ao grupo do ROYAL SPORTS!* \n\n📱 Whatsapp: +86 135 3997 8787\n\nLink do grupo: https://chat.whatsapp.com/H5qkZYio99O1NRbZdWuNgO \n\n🗂 Yupoo: http://goo.gl/e7KEAd\n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n ▪Masculino e feminino: 12$\n ▪Manga longa: 14$\n▫ Player lisa:\n ▪Adidas: 15$\n ▪Puma: 16$\n ▪Nike: 18$\n▫ Retrô: 15$\n👶 Kit Infantil: 12$\n\n👖Short:\n ▫ Fan: 8$\n ▫ Player: 12$\n🧦 Meia: 3$ - 6$\n🧥 Windbreaker (Corta-Vento): 28$ a 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n  ▪Conjunto: 42$\n▫ Manga longa\n  ▪ Conjunto: 45$\n   ------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Braza Xports._",
  },

  "/dolarroyal": {
    text: "*LINK DE COMPRA ROYAL*\nhttps://www.aliexpress.com/item/1005005313639135.html",
  },

  "/curry": {
    text: "*Bem vindo(a) ao grupo do fornecedor CURRY!* \n\n📱 Whatsapp: +86 181 2218 0753\n\nLink do grupo: https://chat.whatsapp.com/CqYP1oN27sX7Y06JYCm1gs \n\n🗂 Yupoo \n*FOOTBALL*: https://cutt.ly/k4LZb8Q \n*NBA*: https://cutt.ly/F4LZTCk \n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n ▪Masculino e feminino: 10$\n ▪Manga longa: 14$\n*OBS: PROMOÇÃO*\n 3 CAMISAS FAN POR 30$ + FRETE GRÁTIS \n 4 CAMISAS FAN POR 38$ + FRETE GRÁTIS \n 5 CAMISAS FAN POR 45$ + FRETE GRÁTIS \n▫ Player lisa:\n ▪Adidas: 13$\n ▪Puma: 16$\n ▪Nike: 16$\n▫ Retrô: 16$\n▫ Kit Infantil: 14$\n\n👖Short:\n ▫ Fan: 8$\n ▫ Player: 12$\n🧦 Meias: 3$ - 7$\n🧥 Windbreaker (Corta-Vento): 28$ a 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n  ▪Conjunto: 42$\n▫ Manga longa\n  ▪ Conjunto: 45$\n\n🏀NBA: $19 \n\n------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Braza Xports._",
  },

  "/dolarcurry": { text: "*LINK DE COMPRA CURRY*\nhttps://cutt.ly/s4LFXA6" },

  "/guo": {
    text: "*Bem vindo(a) ao grupo do fornecedor GUO!* \n\n📱 Whatsapp: +86 181 2218 0753\n\nLink do grupo: https://chat.whatsapp.com/G5yAyYE1zTC6l5SrLd1Sur \n\n🗂 Yupoo \n*FOOTBALL*: https://x.yupoo.com/photos/zhouchangliang/albums \n💵 Pagamento: Aliexpress/WU/Paypal\n------------------------------------------\n*✔ PREÇOS:*\n👕 Jerseys\n\n▫ Fan Lisa:\n ▪Masculino e feminino: 10$\n ▪Manga longa: 13$\n▫ Player lisa:\n ▪Adidas: 15$\n ▪Puma: 15$\n ▪Nike: 17$\n\n▫ Retrô: 15$ ~ 18$ \n▫ Kit Infantil: 14$\n\n👖Short:\n ▫ Fan: 9$\n ▫ Player: 12$\n🧥 Windbreaker (Corta-Vento): 30$\n\n👚 Casual\n▫ Polo: 13$\n\n🧥➕👖 Conjuntos Kit Treino/Viagem (Agasalho + calça)\n▫ Manga curta\n  ▪Conjunto: 42$\n▫ Manga longa\n  ▪ Conjunto: 45$\n\n🏀NBA: Conferir com o fornecedor (modelos variados) \n\n------------------------------------------ \n*🔠 PERSONALIZAÇÃO 🔠* \nO valor deve ser adicionado ao valor da Jersey\n▪ Nome + número: ➕ 3$\n▪ Patch: ➕ 1$\n\n*TAMANHOS EXTRA*\n2XL, 3XL, 4XL: + 1$ \n\n\n_Equipe Braza Xports._",
  },

  "/dolarguo": { text: "*LINK DE COMPRA GUO*\nhttps://cutt.ly/W4LVif1" },

  "/lisa": {
    text: "*Bem vindo(a) ao grupo da LISA - O DÓLAR MAIS BARATO DA CHINA*\n\n🗂 Catálogo: https://camisetafutbol.x.yupoo.com/albums?tab=gallery \n\n*Como Funciona?*\nA Lisa opera por um meio diferente dos demais fornecedores. Ela tem banco no Brasil e aceita pagamentos via Pix diretamente, além de também aceitar por boleto e Western Union Remittance. Isso é um diferencial, *pois o dólar sai BEEEEEM mais barato que o da Aliexpress.* \n\n💵 *VALORES:*\n\n👕 *CAMISAS* \n\n👕 Modelo Fan: 12$\n\n👕 Modelo Player\n   ▫ Nike/Puma: 16$\n   ▫ Adidas: 14$\n\n👕 Retro:\n   ▫ Normal: 16$\n   ▫ Manga Longa: 18$\n\n👶 Kit Infantil: 12$\n▫ Polo:13$\n🧥➕👖 Kit Treino: 40/45$\n👖 Short: 9$\n\n🏀 NBA: 18$ Bordada, 20$ Silk\n🤾‍♂️ NFL: 22$ \n\n👚*CUSTOMIZAÇÃO*: 3$\n\n*👕 TAMANHOS EXTRAS*\n   ▫2XL: 2$\n   ▫3XL: 3$\n\n🚚 *FRETE*\n👕 = 5$\n👕👕 = 3$\n👕👕👕+ = *GRÁTIS!*\n\n_Equipe Braza Xports_",
  },

  "/dolarlisa": {
    text: "O dólar da Lisa é bem próximo da cotação real do dólar. Entre em contato com a fornecedora que ela te informará a cotação diária.",
  },

  "/lichang": {
    text: "LI CHANG \n🗂️https://royal-sports.x.yupoo.com/\n🗂️https://vpi123.x.yupoo.com/\n\n👕Fan lisa:10$\n👕Retro:18$\n👕Nike player:18$\n🥼Manga longa:15$\n🏀NBA Silk:20$\n🩳Short NBA:20$\n🏈NFL:25$/35$\n🧥Corta vento:36$\n🧥Kit treinamento:40$\n🧥Jaqueta:36$\n👶Kit infantil:13$\n🔠Personalização:3$\n🥇Patch:1$ (cada)\n\n✈️Frete:👇\n1👕:5$\n2👕👕:4$\n3👕👕👕:3$\n4👕👕👕👕:Frete grátis + 1 chaveiro\n\n _Equipe Braza Xports_",
  },

  "/dolarlichang": {
    text: "*LINK DE PAGAMENTO LICHANG* \n\nhttps://www.aliexpress.com/item/1005005436009452.html?spm=5261.ProductManageOnline.0.0.449271979TuVQp",
  },

  "/jeff": {
    text: "FORNECEDORA JEFF JERSEYS \n\nContato: +86 158 1339 7374 \n\nCatálogo: https://camisetafutbol.x.yupoo.com/albums \n\n❇ Camisa Fan 10$ \n❇ Camisa Fan manga longa 14$ \n❇ Camisa Player Adidas 13$ \n❇ Camisa Player Nike 15$ \n♦ Kit infantil 12$ \n♦ Adultos kit Camisa 18$ \n♦ Camisas Retrô 16$ \n👖 Calções/Shorts 10$ \n❇ Camisas NFL 21$ \n❇ Personalização 3$ \n❇ Tamanho 2XL,1$ 3XL 2$ \n❇ NBA 21$    \nFrete por peças \n1 Peça = 5$ \n2 Peças = 4$ \n3 Peças = 3$\n4 Peças = 2$\n5 Peças Frete grátis HK / Epacket\n\n✔ PAGAMENTO VIA ALIEXPRESS SUA COMPRA GARANTIDA.\n\n_Equipe Braza Xports_",
  },

  "/dolarjeff": {
    text: "LINK PAGAMENTO JEFF\n\nhttps://www.aliexpress.com/item/1005005174156888.html?spm=5261.ProductManageOnline.0.0.19c14edfLVtahp",
  },

  "/tim": {
    text: "*Bem vindo(a) ao grupo do TIM - O MAIOR VENDEDOR DE TÊNIS E GRIFE DA CHINA*\n\n📱*CATÁLOGO:* \n\n*CHUTEIRAS*\nhttps://dachang88.x.yupoo.com/albums?tab=gallery \nhttps://qiumishijie.x.yupoo.com/albums?tab=gallery \nhttps://x.yupoo.com/photos/lyzs88/albums?tab=gallery \n\n*GRIFES*\nhttp://ygshoes188.com\n\n*TÊNIS*\nhttps://x.yupoo.com/photos/happydate/albums\nhttps://x.yupoo.com/photos/xiongdimaoyi168/albums?tab=gallery\nhttps://x.yupoo.com/photos\n\n💵 *PREÇOS*: Se informe com o vendedor, cada produto varia o preço. ",
  },

  "/tenis": {
    text: "Tabela de preços Tim🔥\n\nA melhor do segmento de tênis e chuteiras  🛍️👟\n\n⚠️ PREÇOS APROXIMADOS ⚠️\n\n\n✴️ ADIDAS ✴️\n\nAdidas Streetball: 75$\nAdidas Nite Jogger: 75$\nAdidas EQT BASK: 65$\nAdidas Yeezy 300/350: 59$\nAdidas Ultraboost até 2020: 65$\nAdidas Ultraboost Lançamentos: 75$\nAdidas Superstar básico: 55$\nAdidas Yeezy Slide: 55$\nAdidas NMD: 65$ maioria\nAdidas PW Human Race NMD: 65$\nPharrell x NERD x Adidas NMD Human Race: 65$\n\n❇️ NIKE ❇️\n\nNike Sacai X Nike Blazer: 85$\nNike Undercover X Daybreak: 75$\nNike Sacai x LVD Waffle Daybreak: 75$\nNike React Element 87: 59$\nNike Air Force 1: 65$\nNike Air Vapormax Run Utility: 65$\nNike Off-White x Air Jordan 5: 85$\nNike Off White x N Air Max 90: 75$\nNike Air Max 97: 65$\nNike VaporMax 2.0: 59$\nNike Zoom +2K: 75$\nNike Air Max 1 Travis Scott: 75$\n\n❇️ GUCCI ❇️\n\nGucci Rhyton Vintage Trainer Sneaker: 85$\nGucci Ace Embroidered Low-Top Sneaker: 75$\nGucci Ace Embroidered Low: 75$\n\n❇️ New Balance ❇️\n\nNew Balance: 69$\n\n\n _Equipe Braza Xports_",
  },

  "/chuteiras": {
    text: "Tabela de preços Tim🔥\n\nA melhor do segmento de tênis e chuteiras  🛍️👟\n\n⚠️ PREÇOS APROXIMADOS ⚠️\n\n\n⚽ CHUTEIRAS CAMPO ⚽\n\nNike Phantom GT Elite: 52$\nNike Phantom GT Dynamic Fit: 55$\nNike SuperFly 6 Elite: 55$\nNike SuperFly 7 Elite: 55$\nNike SuperFly 8 Elite: 57$\nNike Vapor 13 Elite: 55$\nNike Vapor 14 Elite: 55$\nNike Tiempo Legend 9 Elite: 52$\nNike Tiempo Legend 8 Elite: 50$\nAdidas X Ghosted FG: 55$\nAdidas X GHOSTED F50 FG 55$\nAdidas Predcopx FG: 55$\nAdidas X Ghosted FG: 55$\nAdidas X Ghosted AG: 50$\nAdidas X Speedflow+: 55$\nAdidas X Speedflow.1 : 54$\nAdidas Predator 20.1 FG: 52$\nAdidas Predator Mutator 20.1 Low FG: 50$\nAdidas Predator Mutator 20+ FG: 55$\nAdidas Predator Accelerator  FG: 55$\nAdidas Predator Freak + FG: 59$\nAdidas Predator Freak.1 MID FG: 57$\nAdidas Predator Freak.1 FG: 55$\nAdidas Predator Edge.1 FG: 59$\nAdidas Predator Edge+ FG: 57$\nAdidas Copa 20.1: 49$\nAdidas Copa Sense+: 57$\nAdidas Copa 20+ FG: 50$\nAdidas Nemezis 19+ FG: 55$\nAdidas Nemezis 19.1 FG: 49$\nPuma Future Z FG: 50$\nMizuno Morelia Neo III FG: 49$\n\n\n⚽ CHUTEIRAS SOCIETY ⚽\n\nNike Phantom GT Pro: 45$\nNike SuperFly 6 Elite: 50$\nNike SuperFly 7 Elite: 50$\nNike SuperFly 8 Elite: 59$\nNike Vapor 13 Elite: 50$\nNike Vapor 14 Pro: 59$\nNike Tiempo Legend 8 Elite: 47$\nNike Tiempo Legend 9 Elite: 47$\nNike Zoom VSN 2 Pro: 49$\nAdidas X Ghosted TF: 45$\nAdidas Copa 20.1 TF: 47$\nPuma Future Z TF: 49$\n\n⚽ CHUTEIRAS SALÃO ⚽\n\nNike Phantom GT Pro: 45$\nNike SuperFly 6 Elite: 49$\nNike SuperFly 7 Elite: 49$\nNike SuperFly 8 Pro: 59$\nNike Zoom VSN 1 e 2 Pro: 45$\nNike React Gato: 47$\nNike Tiempo Legend 8 Elite: 47$\nNike Tiempo Legend 9 Elite: 47$\nNike Tiempo Lunar Legend VIII IC: 45$\nAdidas Predator Mutator 20+ IN: 49$\nMizuno Morelia Neo III TF: 45\nPuma Future Z: ?$\n\n\n _Equipe Braza Xports_",
  },


  "/mo": {
    text: "MO YAOQUAN  \n\n📲 Catálogos: \nhttps://a15707508070.x.yupoo.com/albums\nhttps://royal-sports.x.yupoo.com/albums\nhttps://minkang.x.yupoo.com/\n\n⚠ 5 camisas $46 ⚠  \n\n👕 Fan 10$\n👕 Player  Adidas 14$ Nike16$\n💻 Personalização = 2$\n📏 Tamanho XXL,XXXL=1$\n👕 Camisa Manga Longa =15$\n🎽 Retrô = 16$ \n👦🏻 Kit Infantil = 13$\n🩳 Shorts = 8$\n🧦 Meiões = 6$\n🏀 Embroidery NBA shirt= 18$ \n\n🧥 Corta-vento = 30$\n👖 Calça de Treino = 18$\n👕👖Kit de Treino  Manga Curta=27$\n👕👖Kit de Treino  Manga Longa= 34$ \n\nFRETE POR ALIEXPRESS ✈\n\n1👕=4$\n2👕=3$\n3Camisas  Frete Grátis\n\n_Equipe Braza Xports_",
  },

  "/dolarmo": {
    text: "LINK DE PAGAMENTO MO YAOQUAN:\n\nhttps://www.aliexpress.com/item/1005005048417491.html?spm=5261.ProductManageOnline.0.0.15744edfV45sSq",
  },

  "/zhou": {
    text: "⚽🏆Bem vindo ao grupo ❄👑\n\n👕 Vendedor: ZHOU\n📞 Contato:+86 15014299983\n📲 Catálogo: https://zhouchangliang.x.yupoo.com/albums\n👕Flamenco em casa Fã Lisa  = $10\n👕Camisa Player  = Adidas 13$ Nike16$ \nNome + número，Custom=3$\n💻Personalização = 1$\n📏Tamanho XXL、XXXL=1$\n👕Camisa de Manga Longa =14$\n🎽Retrô = 16$ \n👦🏻Kit  Infantil = 14 $\nShorts = 8$ \nNBA shirt= 22$\n🧥Corta-vento = 35$\nCorta-vento Kit de Treino=43$\n👖 Calça de Treino = 18$\n👕👖Kit de Treino  Manga Curta=28$ \n👕👖Kit de Treino  Manga Longa= 35$ \nValores de envio \n1 camisa = 5$\n2 camisas= 4$\n3 camisas= 2$\n4 camisas frete grátis .\n💰 Pagamento = Aliexpres, via ou WESTERN UNION 💰\n\n _Equipe Braza Xports_",
  },

  "/dolarzhou": {
    text: "LINK DE PAGAMENTO ZHOU:\n\nhttps://www.aliexpress.com/item/1005005166932715.html?spm=5261.ProductManageOnline.0.0.15564edfOwmOjA",
  },

  "/simon": {
    text: "BEM VINDO AO GRUPO SIMON\n\n📔CATALOG 👇🏻\nhttps://abcd1234fei.x.yupoo.com/albums\n\n🩳 Shorts $8\n👕 Fan shirt $11\n👕 Adidas Player $15\n👕 Nike Player $16\n👶🏻 Children‘s Kit $13\n🧥 Long Sleeve $14\n👕 Retro $16 \n🧔🏻 Adult Kit $18\n🏀 NBA Silk $21\n🔰 Patch $1\n📏 Size 2XL+$1， 3XL +$2/ 4XL $3\n🔠 Custom $3\nFREIGHT\n1 shirt +$ 5 ✈️\n2 shirts +$4 ✈️\n3 shirts + $3 ✈️\n4 shirts + $2 ✈️\n5 shirts free + 1 chaveiro grátis\nFree shipping key chain🔑\n\n📌Facebook:\nhttps://www.facebook.com/profile.php?id=100090008982630&mibextid=ZbWKwL\n\n\n +Equipe Braza Xports_",
  },

  "/dolarsimon": {
    text: "LINK DE PAGAMENTO SIMON:\n\nhttps://www.aliexpress.com/item/1005005179877604.html",
  },

  "/cici": {
    text: "SEJA BEM-VINDO AO GRUPO  CICI\n\n*5 CAMISAS - 1 CHAVEIRO GRÁTIS* \n\n✅𝗙𝗔𝗡 = $ 8 ⚠️\n✅3 𝗖𝗔𝗠𝗜𝗦𝗔𝗦 𝗙𝗥𝗘𝗧𝗘 𝗚𝗥𝗔𝗧𝗜𝗦 \n✅𝗖𝗔𝗠𝗜𝗦𝗔𝗦 𝗧𝗔𝗜𝗟𝗔𝗡𝗗𝗘𝗦𝗔𝗦 \n✅𝗗𝗜𝗥𝗘𝗧𝗢 𝗗𝗢 𝗙𝗢𝗥𝗡𝗘𝗖𝗘𝗗𝗢𝗥 \n✅𝗤𝗨𝗔𝗟𝗜𝗗𝗔𝗗𝗘 𝟭:𝟭 \n✅𝗣𝗔𝗚𝗔𝗠𝗘𝗡𝗧𝗢 𝗔𝗟𝗜𝗘𝗫𝗣𝗥𝗘𝗦𝗦 \n✅𝗘𝗡𝗧𝗥𝗘𝗚𝗔 𝟯 𝗔 𝟱 𝗗𝗜𝗔𝗦\n\n🔗 𝑳𝒊𝒏𝒌 𝒅𝒐 𝒈𝒓𝒖𝒑𝒐 de suporte:\nhttps://chat.whatsapp.com/DYs9ycwbwNi6aT64tZxnwe\n\n🔗 𝑳𝒊𝒏𝒌 𝒅𝒐 𝒈𝒓𝒖𝒑𝒐 𝑭𝒂𝒄𝒆𝒃𝒃𝒐𝒌:\nhttps://www.facebook.com/groups/598138121873154/?ref=share\n\n\n _Equipe Braza Xports_",
  },

  "/alice": {
    text: "⚠️ 3 peças frete grátis + chaveiro de brinde ❤️\n\n\nCatalogo:\nhttps://alicejersey.x.yupoo.com/\n\n👕Fan $11\n👕Player (Adidas $14 / Nike $18)\n🥼Manga Longa $14\n👶Kit infantil $13\n👔Retrô $15\n📏Tamanho 2XL +$1 / 3XL +$2\n🔟Personalizar +$3\n📌Patch +$1\n👕Polo $14\n🩳Shorts $9\n🧦Meias $3\nKit Treino $38\nKit Jaqueta $45 \nKit Jaqueta Capuz $48\n\n🏀NBA Bordada $18\n🏀NBA Silk $21\n\n✈️Frete (NA-BR)\n1 Camisa - Frete $4\n2 Camisas - Frete $3\n3 Camisas - Frete Grátis\n\n\n_Equipe Braza Xports_",
  },

  "/dolaralice": {
    text: "LINK DE PAGAMENTO ALICE:\n\nhttps://pt.aliexpress.com/item/1005005263185864.html",
  },

  "/forms": { text: "https://cutt.ly/k4Bmk7R" },

  "/drive": {
    text: "https://drive.google.com/drive/folders/1Uqys8AL3bdGCw6UXt-wj3sWTsXla43xX?usp=share_link",
  },

  "/1.1": {
    text: "Se saiu tem pouco tempo, é por sua conta e risco! Ninguém acerta de primeira, não seria um chinês que mudaria essa história. \n\nAguarde pelo menos 1 mês após o lançamento para efetuar a compra se quer comprar sem riscos.",
  },

  // COMANDOS BOT DICAS OPÇÕES E SUPORTE

  "/help": {
    text: "*COMANDOS BOT DO BRAZA - DICAS, OPÇÕES E SUPORTE*\n\n/fornecedores - Nosso linktree com todos os fornecedores \n/tamanhos - Arquivo PDF com a tabela de medidas \n/cuidados - Foto com os cuidados que se devem ter com uma tailandesa \n/linkgrupo - Link do grupo (Dicas, Opções e Suporte) \n/formulario - Link do Forms onde você deve colocar seu ID da ordem. \n/1.1 - Resposta se a camisa tá 1.1 \n/drive - Link do Drive com fornecedores indicados (em progresso)",
  },

  "/fornecedores": { text: "https://linktr.ee/fornecedoresdetailandesas" },

  "/linkgrupo": { text: "https://chat.whatsapp.com/DYs9ycwbwNi6aT64tZxnwe" },

  "/formulario": { text: "https://cutt.ly/g4BmAdS" },
};

module.exports = message_list;