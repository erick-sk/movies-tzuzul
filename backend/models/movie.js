const { mongoose } = require('../config/db');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  date: Date,
  sinopsis: String,
  urlSource: String,
  rating: Number,
});

const MovieModel = mongoose.model('movies', movieSchema);

module.exports = MovieModel;
