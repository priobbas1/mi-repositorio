'use strict';

const express = require('express');
const accountRouter = require('./routes/account-router');
const authRouter = require('./routes/auth-router');

const app = express();

app.use(express.json());


app.use('/api', accountRouter);
app.use('/api', authRouter);

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
