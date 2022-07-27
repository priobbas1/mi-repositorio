'use strict';

const express = require('express');
const accountRouter = require('./routes/account-router');
const authRouter = require('./routes/auth-router');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('1. entrando request', req.url);

  req.atributoInventado = '1234';

  next();
});

app.use((req, res, next) => {
  console.log('2. continuando request', req.url);

  next();
});


app.use('/api', accountRouter);
app.use('/api', authRouter);

app.use((req, res, next) => {
  console.log('NUNCA');
});
/**
 * Me gustaria  que este archivo que se encarga del servidor web, tenga 
 * 2 métodos, un método listen y un método close
 */
async function listen(port) {
  const server = await app.listen(port);

  return server;
}
 
module.exports = {
  listen, // listen: listen
};
