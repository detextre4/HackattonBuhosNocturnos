import { useStorage } from "vue3-storage-secure"
import { useTheme } from "vuetify/lib/framework.mjs"
import { storageSecureCollection } from "@/plugins/vue3-storage-secure"

export default {
  // ? custom defines
  isProduction: process.env.NODE_ENV === 'production',

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
