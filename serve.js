'use strict' // força o JS a ser muito mais criterioso

const http = require('http');
const express = require('express');
const debug = require('debug');
const PORT = 3005;

const app = express();

// Criando rotas
// app.get('/', (req, res) => {
//   res.send('Ola Mundo')
// })

// app.post('/', function(req, res){
//   res.send('Enviando para o servidor')
// })

// Caminhos de Rota

// corresponde a rota raiz (/)
app.get('/', function (req, res) {
  res.send('root');
});

app.get('/about', (req, res) => {
  res.send('about');
})

app.get('/random.txt', (req, res) => {
  res.send('random.txt');
})

// rotas baseadas em padrões de sequência
// acd e abcd
app.get('/ab?cd', function(req, res){
  res.send('ab?cd');
})

// abcd, abbcd, abbbcd
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

// Manipuladores de rota
// o (a) vai definir o retorno da rota
app.get('/example/a', (req, res) => {
  res.send('Hello from A');
})

// Mais de uma função de retorno de chamada pode manipular uma rota (certifique-se de especificar o objeto 'next' object)
app.get('/example/b', (req, res, next) => {
  console.log('Executando a primeira função na rota B');
  // res.send('Primeira chamada do res'); - não pode
  next();
}, function(req, res){
  res.send('Executando a segunda função na rota B');
});

// Matriz de funções

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

// Combinação de funções independentes e matrizes de funções podem manipular uma rota

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

// app.route
// cria rotas encadeáveis

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });






// Fazendo o servidor escutar
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})



// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });
//   res.write('Servidor rodadando na porta ' + '3001');
//   res.end()
// }).listen(3001)
