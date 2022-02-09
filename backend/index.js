const express = require('express');
const config = require('./config');

//Trayendo conexión a BD
const { connection } = require('./config/db');
connection();

//importando rutas
const movies = require('./routes/movies');

const app = express();

//global middleware
app.use(express.json());

//usando rutas
movies(app);

app.listen(config.port, () => {
  console.log('Server: http://localhost:' + config.port);
});
