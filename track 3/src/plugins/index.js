// Plugins
import Vue3Storage from './vue3-storage-secure'
import polyfills from './polyfills'
import injects from './injects'
import directives from './directives'
import vuetify from './vuetify'
import store from '../store'
import vueI18n from './vue-i18n'
// import { loadFonts } from './webfontloader'
import vueToastification from './vue-toastification'
import mixins from './mixins-import'

export function registerPlugins (app) {
  // Use principals
  Vue3Storage(app)
  polyfills()
  injects(app)
  directives(app)

  // Use plugins
  app
    .use(vuetify)
    .use(store)

  // Use custom plugins
  // loadFonts()
  vueI18n(app)
  vueToastification(app)

  mixins(app) // this should be the last one
}
