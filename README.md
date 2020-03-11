# Red

O projecto Website é um projecto da cliente Red.

# Começando a utilizar os projecto
Para manter as versões utilizadas no desenvolvimento use o `npm`

## Instalando dependências
```
npm install
```

### Compilando para desenvolvimento (Hot-Reload)
```
npm run serve
```

# Antes de avançar por favor leia isso.
Este projecto é regido por regras que facilitam as pessoas entenderem o que foi feito por um ou por outro desenvolvedor. Então segui-lás é o mais recomendado.

## Como criar componentes
Os componentes com exceção dos utilizados em muitas partes do sistema (que podem ser encontrados em `components/shared`) devem estar sempre dentros das pastas da sua respectiva page em components.
Assim sendo os componentes da page `home` devem sempre estar em `components/home`.

## Lint e padrões de código
Nós usamos o Eslint para nos auxiliar em algumas coisas, mas o padrão que utilizamos é o standardjs, sinta-se livre para dar uma olhada se não está familiarizado.

## Padrões de commit
Para comitar nós seguimos a recomendação `config-conventional` do commitlint, dê uma olhada. para conseguir comitar.

## Classes (Scss & css)

Nomes de classes devem ser auto-declararivas.
Classes como `mdl-xl-2` devem ser alteradas para `modal-small-2`, salvo as nomenclaturas mais conhecidas como `btn` por exemplo.

## Estilos globais
Como estamos a usar sass,  a declaração de variaveis de cor e etc, devem estar em `assets/sass`, aí pode conter cores padrão que serão usadas com frequência no projecto.

## Branches
Para garantir que tudo está em boas condições nós usamos branchs, o que isso significa? Cada nova feat/fix deve estar numa branch separada. sempre puxada da `dev` e essa branch só deve conter as modificações do que se pretende.