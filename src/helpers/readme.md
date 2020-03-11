# Pasta helpers

Nesta pasta deve conter todos os helpers, que podem ser usados mais de uma vez na aplicação.

## Nomenclatura

De forma a padronizar os helpers, devem ser criando usando snack_case ( Porém nós não vamos usar o `_` no lugar vamos usar o `-` )

**Att:** O Nome deve ser corente, então se estas a criar um helper para o menu, tens que saber exatamente o que esse arquivo fará e só assim criar ele com o nome mais indicado.

### Exemplo

Tenho um helper que cria todo o menu o nome do helper deve ser `create-menu.helper.js`, isso ajuda a saber o que é um helper do que não é, e o que ele faz, só de ler o nome.

**Att:** Helpers sempre exportam uma funcção. Assim sendo, a primeira linha do mesmo deve ser sempre.
```js
  // sum.helper.js
  module.exports = function (a, b) {
    return a + b
  }
```