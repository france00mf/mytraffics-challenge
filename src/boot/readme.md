# Pasta boot

É nesta pasta onde todas as dependências devem ser instaladas, de forma a manter o `main.js` limpo e organizado.

## Como declarar uma dependência

Crie um arquivo com o nome a dependência e importe o vue e a dependência que precisa.

### Exemplo
```js
  import Vue from 'vue'
  import VueI18n from 'vue-i18n'
  import ApplicationText from '@/i18n'

  Vue.use(VueI18n)

  // opcional dependendo da dependência
  const i18n = new VueI18n({
    locale: 'pt',
    fallbackLocale: 'pt',
    messages: ApplicationText
  })

  // export se necessário
  export { i18n }

```