<!-- @format -->

<h1 align="center">
    <img src="./.github/star-wars-logo.png">
</h1>

# Star Wars

Aplicação para consulta de dados fornecidos pela API do Star Wars, **swapi**. Foi utilizado a biblioteca **React-query** para manipular o gerenciamento dos dados assíncronos fornecidos pela API.

## Aplicação

<h2>
    <img src="./.github/app.gif">
</h2>

## React-query

### useQuery

O hook **useQuery** retorna `data`, _onde possui os dados do que foi retornado do request_; `status`, _para informar o se os possíveis status da requisição: "loading", "error", "success"_

Após a primeira requisição dos dados, a mensagem de "loading" não aparece mesmo o hook **useQuery** fazendo o fetching. Isso porque os dados já foram carregados uma vez. Se houver alguma mudança no retorno desses dados, é mostrado os dados atualizados e feito cache com esses novos dados. Isso propõe uma boa experiência ao usuário para não ficar o tempo todo vendo mensagem de "loading"

### usePaginatedQuery

É um hook parecido com o anterior, porém ele nos fornece melhores recursos para gerenciar paginação.

O hook **usePaginatedQuery** nos retorna `resolvedData`, _onde é guardado os dados da última requisição que houve sucesso_;`latestData` _é onde fica armazenado os dados atuais que estão na query. É **undefined** até o fetch ser completado. E quando isso ocorre, os dados em `resolvedData` são atualizados. Dessa forma o usuário continua vendo os antigos até a nova requisição ser completada_.

## Documentação swapi

Para saber sobre os demais dados fornecidos, acesse a documentação do [swapi](https://swapi.dev/documentation)

### Recursos da API

**swapi** fornece dados dos seguintes recursos:

```
HTTP/1.0 200 OK
Content-Type: application/json
{
    "films": "https://swapi.dev/api/films/",
    "people": "https://swapi.dev/api/people/",
    "planets": "https://swapi.dev/api/planets/",
    "species": "https://swapi.dev/api/species/",
    "starships": "https://swapi.dev/api/starships/",
    "vehicles": "https://swapi.dev/api/vehicles/"
}
```

## Referências

- [The Net Ninja - React Query Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpi7Ptjl5b50p9gLjOFani)

## Acompanhe-me nas redes sociais

<p align="left">
  <a href="https://twitter.com/vitorsemidio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="/twitter vitorsemidio" height="30" width="30" /></a>&nbsp &nbsp
  <a href="https://linkedin.com/in/vitorsemidio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="Linkedin - Vitor Emidio" height="30" width="30" /></a>&nbsp &nbsp
</p>
