import express from 'express';

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World teste com eslint');
});

app.get('/user', function (req, res) {
  res.send({
    nome: 'Haroldo',
  });
});

app.get('/user/:nome', function (req, res) {
  res.send({
    nome: req.params.nome,
  });
});

app.get('/user/:nome/sobrenome/:sobrenome', function (req, res) {
  res.send({
    nome: req.params.nome,
    sobrenome: req.params.sobrenome,
  });
});

app.listen(8080, function () {
  console.log('Servidor rodando');
});
