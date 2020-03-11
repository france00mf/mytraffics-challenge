import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ApplicationText from '@/i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: ApplicationText
})

export { i18n }
