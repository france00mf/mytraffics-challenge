# Pasta data
    A melhor forma de escalar uma aplicação é começando por construir pensando de forma escalável.

Assim como em qualquer outro projecto a pasta data irá possuir todos os textos da aplicação, independentemete de do site não ter como requisito o **bilingue**.

Vamos manter tudo pensando de forma simples, mas que dê para escalar com mais facilidade.

## Como usar
  Para cada tela nós teremos um arquivo data, que deve ser registado em `i18n/pt`. Com exceção do textos compartilhados, esses devem estar em `shared.data.js`. Assim não temos tantos textos semelhantes em varios arquivos.

### Como criar um novo data

A criação deve ser seguindo o padrão: `nome-zona.data.js`, e deve ser da seguinte forma:
```js
  export default {
    [zona]: {}
  }

```

**Att:** O `[zona]` deve ser substituido pelo nome da zona. [example](./shared.data.js)