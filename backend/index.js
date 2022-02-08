const express = require('express');
const config = require('./config');
const {connection} = require("./config/db")

const app = express();
//Trayendo conexión a BD
connection()


app.listen(config.port, () => {
  console.log('Server: http://localhost:' + config.port);
});

