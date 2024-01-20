export default {
  error: {
    title: "404",
    description: "Page not found",
    button: "Go home"
  },
  navbar: {
    home: "Home",
    about: "About",
    golden: "Golden Elf",
    nft: "NFTs",
    benefice: "Benefice",
    faq: "FAQ",
  },
  hero: {
    title: "The Golden Elf<br> NFT Collection",
    desc: ({ values }) => `The Golden Elf is a private collection of NFTs unique digital collectibles.<br><br> Follow us on social media on <a href=${values.twitter} target='_blank'>Twitter</a> and <a href=${values.instagram} target='_blank'>Instagram</a>, to learn about the mint release.`,
    accent: "THE NEXT RELEASE IS COMING VERY SOON; IT'S ONLY A FEW WEEKS AWAY!"
  },
  history: {
    textTitle: "Our Story",
    bgTextTitle: "about us",
    title: "Welcome to The Golden Elf.",
    desc: "The Golden Elf is a collection of 9,999 randomly and stylistically generated NFTs that exist on the ethereum Blockchain. The Golden Elf are recognized as pioneers in the development of WEB3 & NFT products. The major part of our mission is to develop & produce tools which will reward holders in the best possible way and most importantly, connect the ethereum community.<br> Our main goal is to release new products with each part of our Story which you'll be able to access through our website.",
    btn: "Join Our Discord"
  },
  roadMap: {
    textTitle: "Golden Elf",
    bgTextTitle: "NFTS COLLECTION",
    alt1: "",
    alt2: "",
    alt3: "",
    alt4: "",
    alt5: "",
  },
  collection: {
    textTitle: "Our Collections",
    bgTextTitle: "NFTS"
  },
  benefits: {
    textTitle: "Our Benefits",
    bgTextTitle: "benefits"
  },
  faq: {
    textTitle: "Frequently Asked Questions",
    bgTextTitle: "questions",
    faqs: [
      {
        question: "What is Golden Elf?",
        answer: "The Golden Elf is a collection of 9.999 NFTs based on the legends and stories of the miners of the Remedios region in Antioquia - Colombia.",
      },
      {
        question: "Price collection and size?",
        answer: "The size of the collection is 9.999 NFT of 1000X1000 PX resolution, divided between 5 rarities with unique characteristics.",
      },
      {
        question: "Overall goal?",
        answer: "Our goal is to spread this legendary tale while building a strong community. We want to be very close with our community and in doing so build a community oriented brand.",
      },
      {
        question: "Blockchain?",
        answer: "The Golden Elf will be on the ethereum blockchain.",
      }
    ]
  },
  join: {
    bgTextTitle: "DON’T MISS",
    title: "Join Our Community",
    btn: "Join Discord"
  },
  footer: {
    copy: ({ values }) => `Copyright © 2022 <a href=${values.link} target="_blank">Grupo NapoleoN</a>. All Rights Reserved.`
  }
}
