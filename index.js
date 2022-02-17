const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const filmes = [
  {
    nome: 'A cura',
    genero: 'Suspense',
    elenco: [
      {
        ator: 'Dane DeHaan'
      },
      {
        ator: 'Jason Isaacs'
      }
    ]
  },
  {
    nome: 'A caverna',
    genero: 'Ação e aventura',
    elenco: [
      {
        ator: 'Andrew Wilson'
      },
      {
        ator: 'Cassidy Gifford'
      }
    ]
  }
]

const filmesEmJson = JSON.stringify(filmes)

app.get('/filmes', (req, res) => {
  res.send(filmesEmJson)
})

app.listen(3001, () => console.log('A api está rodando'))
