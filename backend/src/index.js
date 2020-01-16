const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27018/week10', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP: GET, POST, PUT, DELETE
 * 
 * Query Params: req.query (Filtros, ordenação, paginação, ...) - ['/rota']
 * Route Params: req.params (Identificar um recurso na alteração ou remoção) - ['/rota/:parâmetro']
 * Body: req.body (Dados para criação ou alteração de um registro) - ['/rota']
 * 
 * MongoDB (Não-relacional)
 */

app.listen(3333, () => {console.log(`O programa está sendo executado na porta 3333`)});