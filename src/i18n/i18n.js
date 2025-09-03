import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import cn from './locales/cn.json'

const messages = { en, cn }

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
