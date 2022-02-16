const { mongoose } = require('../config/db');

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  body: String,
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
});

const ReviewModel = mongoose.model('reviews', ReviewSchema);

module.exports = ReviewModel;
