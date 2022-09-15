'use strict' // força o JS a ser muito mais criterioso

const http = require('http');
const express = require('express');
const debug = require('debug');
const { create } = require('domain');

const app = express();
// Criando Servidor

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('Servidor rodadando na porta ' + '3001');
  res.end()
}).listen(3001)
