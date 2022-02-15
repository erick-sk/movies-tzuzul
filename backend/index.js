const express = require('express');
const cookies = require('cookie-parser');
const cors = require('cors');
const config = require('./config');

// db connection
const { connection } = require('./config/db');
connection();

//import routes
const movies = require('./routes/movies');
const users = require('./routes/users');
const auth = require('./routes/auth');

// start express
const app = express();

//global middleware
app.use(express.json());
app.use(cookies());
app.use(
  cors({
    origin: '*',
  })
);

// use routes
movies(app);
users(app);
auth(app);

// server running
app.listen(config.port, () => {
  console.log('Server: http://localhost:' + config.port);
});
