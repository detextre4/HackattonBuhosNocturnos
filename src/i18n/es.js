export default {
  error: {
    title: "404",
    description: "Página no disponible",
    button: "Ir a inicio"
  },
  navbar: {
    home: "Inicio",
    about: "Acerca de",
    golden: "Golden Elf",
    nft: "NFTs",
    benefice: "Beneficios",
    faq: "FAQ"
  },
  hero: {
    title: "Colección de NFT<br> Golden Elf",
    desc: ({ values }) => `Golden Elf es una colección privada de NFTs, objetos de colección digitales únicos.<br><br> Síguenos en las redes sociales en <a href=${values.twitter} target='_blank'>Twitter</a> y <a href=${values.instagram} target='_blank'>Instagram</a>, para conocer el lanzamiento de las ediciones.`,
    accent: "¡EL PRÓXIMO LANZAMIENTO LLEGARÁ MUY PRONTO; SOLO FALTAN UNAS SEMANAS.!"
  },
  history: {
    textTitle: "Nuestra Historia",
    bgTextTitle: "quienes somos",
    title: "Bienvenidos a Golden Elf.",
    desc: "Golden Elf es una colección de 9,999 NFT generados de manera aleatoria y con estilo que existen en la cadena de bloques de Ethereum. Golden Elf es reconocido como pionero en el desarrollo de productos de WEB3 y NFT. Gran parte de nuestra misión se centra en desarrollar y producir herramientas que recompensen a los titulares de la mejor manera posible y, lo que es aún más importante, en conectar a la comunidad de Ethereum.<br> Nuestro objetivo principal es lanzar nuevos productos con cada parte de nuestra historia, a los cuales podrás acceder a través de nuestro sitio web.",
    btn: "Únete a Nuestro Discord"
  },
  roadMap: {
    textTitle: "Golden Elf",
    bgTextTitle: "COLECCIÓN NFTS",
    alt1: "",
    alt2: "",
    alt3: "",
    alt4: "",
    alt5: "",
  },
  collection: {
    textTitle: "Nuestra Colección",
    bgTextTitle: "NFTS"
  },
  benefits: {
    textTitle: "Nuestros Beneficios",
    bgTextTitle: "beneficios"
  },
  faq: {
    textTitle: "Preguntas Frecuentes",
    bgTextTitle: "preguntas",
    faqs: [
      {
        question: "¿Qué es Golden Elf?",
        answer: "Golden Elf es una colección de 9,999 NFT basados en las leyendas e historias de los mineros de la región de Remedios en Antioquía, Colombia.",
      },
      {
        question: "¿Precio y tamaño de la colección?",
        answer: "El tamaño de la colección consta de 9,999 NFT con una resolución de 1000x1000 píxeles, divididos en 8 rarezas con características únicas.",
      },
      {
        question: "¿Objetivo general?",
        answer: "Nuestro objetivo es difundir esta historia legendaria mientras construimos una comunidad sólida. Queremos estar muy cerca de nuestra comunidad y, al hacerlo, construir una marca orientada a la comunidad.",
      },
      {
        question: "Blockchain?",
        answer: "Golden Elf estará en la blockchain ethereum.",
      }
    ]
  },
  join: {
    bgTextTitle: "NO TE LO PIERDAS",
    title: "Únete a nuestra comunidad",
    btn: "Únete a Discord"
  },
  footer: {
    copy: ({ values }) => `Copyright © 2022 <a href=${values.link} target="_blank">Grupo NapoleoN</a>. Todos los Derechos Reservados.`
  }
}
