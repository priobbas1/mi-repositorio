'use strict';

const bcrypt = require('bcrypt');
const Joi = require('joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validate(payload) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(3).max(30).required(),
  });
  
  Joi.assert(payload, schema);
}

async function login(req, res) {
  /**
   * 1. Validar datos
   * 2. Hacer consulta a la bbdd
   *  2.1 Validar que la password sea correcta
   * 3. Enviar respuesta al usuario
   */

  const accountData = { ...req.body };

  try {
    await validate(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  /**
   * 2. Query a la bbdd para ver si el usuario existe
   */
  const sqlQuery = `SELECT id, email, password, avatar
    FROM users
    WHERE email = '${accountData.email}'`;
  
  let connection = null;

  try {
    connection = await mysqlPool.getConnection();
    const [rows] = await connection.query(sqlQuery);
    connection.release();

    if (rows.length !== 1) {
      return res.status(401).send();
    }

    const user = rows[0];
    
    // 2.1 Miramos si la password es correcta
    const isPasswordOk = await bcrypt.compare(accountData.password, user.password);

    if (isPasswordOk === false) { // !isPasswordOk
      return res.status(401).send();
    }

    const userSession = {
      userId: user.id,
      role: 'admin',
      avatar: user.avatar,
    };

    return res.send(userSession);
  } catch (e) {
    if (connection !== null) {
      connection.release();
    }

    console.error(e);
    return res.status(500).send(e);
  }
}

module.exports = login;
