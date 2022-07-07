
# CSV Despesas

Projeto destinado a prática de NodeJS gerando um csv
A
[![NodeJs](https://img.shields.io/badge/Node-14.15.1-green.svg)](https://nodejs.org/en/)
[![excel4node](https://img.shields.io/badge/Excel4node-1.7.2-blue.svg)](https://www.npmjs.com/package/excel4node)
[![Axios](https://img.shields.io/badge/Axios-0.27.2-red.svg)](https://www.npmjs.com/package/excel4node)

#### Iniciando o Projeto

No diretório backend
```http
  npm install
```
## API
No diretório da Backend/api:
```http
  json-server db.json --watch 
```
#### Retorna todos os itens


```http
  GET /despesas
```

#### Retorna um item

```http
  GET /despesas/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | Com o id Retorna a despesa |



## Backend

No diretório backend 

```
  node index
```

### Download

O arquivo csv será gerado na pasta Downloads
## Etiquetas

Adicione etiquetas de algum lugar, como: [shields.io](https://shields.io/)



