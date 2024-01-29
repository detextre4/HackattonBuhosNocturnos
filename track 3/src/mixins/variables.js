import { useStorage } from "vue3-storage-secure"
import { useTheme } from "vuetify/lib/framework.mjs"
import { storageSecureCollection } from "@/plugins/vue3-storage-secure"

export default {
  // ? custom defines
  isProduction: process.env.NODE_ENV === 'production',
  discordLink: "https://discord.com/invite/B9uYCDNVMc",
  twitterLink: "https://twitter.com/eth_GoldenELF",
  instagramLink: "https://www.instagram.com/eth_goldenelf/",
  napoleonGroupLink: "https://www.gruponapoleon.com",
  appIsLaunched() {
    return useStorage().getStorageSync(storageSecureCollection.appIsLaunched)
  },
  getTheme() {
    return useTheme().name
  },
  getThemeSrc() {
    return `@/assets/sources/themes/${useTheme().name}/`
  },

  //?  life cycle
  // mounted() {},
}
