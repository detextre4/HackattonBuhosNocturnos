import { createI18n } from 'vue-i18n'
import en from '@/i18n/en'
import es from '@/i18n/es'
import { useStorage } from 'vue3-storage-secure'
import { storageSecureCollection } from './vue3-storage-secure'

export default (app) => {
  const
  languageStoraged = useStorage().getStorageSync(storageSecureCollection.language),
  i18n = createI18n({
    locale: languageStoraged ?? 'en', // set locale
    fallbackLocale: languageStoraged ?? 'en', // set fallback locale
    // set messages objects
    messages: { en, es }
  })

  app.use(i18n)
}
