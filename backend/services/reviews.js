const ReviewModel = require('../models/review');
class Reviews {
  async getReview(id) {
    const review = await ReviewModel.findById(id);
    return review;
  }

  async getReviewsByMovie(id) {
    const reviews = await ReviewModel.find({ movie: id });
    return reviews;
  }

  async createReview(data) {
    const review = await ReviewModel.create(data);
    return review;
  }

  async updateReview(id, data) {
    const review = await ReviewModel.findByIdAndUpdate(id, data, { new: true });
    return review;
  }

  async deleteReview(id) {
    const review = await ReviewModel.findByIdAndDelete(id);
    return review;
  }
}

module.exports = Reviews;
