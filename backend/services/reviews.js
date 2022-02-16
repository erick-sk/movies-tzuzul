const ReviewModel = require('../models/review');
class Reviews {
  async createReview(data) {
    const review = await ReviewModel.create(data);
    return review;
  }
}

module.exports = Reviews;
