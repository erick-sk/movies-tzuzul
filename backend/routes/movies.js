const express = require('express');
const { isEditor, isRegular } = require('../middleware/auth');
const Movies = require('../services/movies');
const Reviews = require('../services/reviews');

function movies(app) {
  const router = express.Router();
  const moviesService = new Movies();
  const reviewsService = new Reviews();
  app.use('/api/movies', router);

  // get premieres
  router.get('/premieres', async (req, res) => {
    const movies = await moviesService.getPremieres();
    return res.status(200).json(movies);
  });

  // get popular
  router.get('/popular', async (req, res) => {
    const movies = await moviesService.getPopular();
    return res.status(200).json(movies);
  });

  // get unpopular
  router.get('/unpopular', async (req, res) => {
    const movies = await moviesService.getUnpopular();
    return res.status(200).json(movies);
  });

  // get single movie
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await moviesService.get(id);
    return res.status(200).json(movie);
  });

  // get all movie
  router.get('/', async (req, res) => {
    const movies = await moviesService.getAll();
    return res.status(200).json(movies);
  });

  // create movie
  router.post('/', isEditor, async (req, res) => {
    Object.assign(req.body, { creator: req.user.id });

    const movie = await moviesService.create(req.body);
    return res.status(201).json(movie);
  });

  // update movie
  router.put('/:id', isEditor, async (req, res) => {
    const { id } = req.params;

    const movie = await moviesService.get(id);
    const { creator } = movie;

    if (req.user.id === creator.toString()) {
      const movie = await moviesService.update(id, req.body);
      return res.status(200).json(movie);
    } else {
      return res.status(401).json({
        message: 'You cannot update the movie because you are not its creator.',
      });
    }
  });

  // delete movie
  router.delete('/:id', isEditor, async (req, res) => {
    const { id } = req.params;

    const movie = await moviesService.get(id);
    const { creator } = movie;

    if (req.user.id === creator.toString()) {
      const movie = await moviesService.delete(id);
      return res.status(200).json(movie);
    } else {
      return res.status(401).json({
        message: 'You cannot delete the movie because you are not its creator.',
      });
    }
  });

  // get review
  router.get('/:id/reviews/:idreview', async (req, res) => {
    const { idreview } = req.params;

    const review = await reviewsService.getReview(idreview);
    return res.status(200).json(review);
  });

  // get all review
  router.get('/:id/reviews', async (req, res) => {
    const { id } = req.params;

    const reviews = await reviewsService.getReviewsByMovie(id);
    if (reviews.length <= 0) {
      return res
        .status(404)
        .json({ message: 'There is no review for this movie' });
    } else {
      return res.status(200).json(reviews);
    }
  });

  // create review
  router.post('/:id/reviews', isRegular, async (req, res) => {
    Object.assign(req.body, { creator: req.user.id, movie: req.params.id });

    const review = await reviewsService.createReview(req.body);
    return res.status(200).json(review);
  });

  // update review by owner
  router.put('/:id/reviews/:idreview', isRegular, async (req, res) => {
    const userID = req.user.id;
    const reviewID = req.params.idreview;

    const review = await reviewsService.getReview(reviewID);
    const { _id, creator } = review;

    if (userID === creator.toString()) {
      const newReview = await reviewsService.updateReview(_id, req.body);
      return res.status(200).json(newReview);
    } else {
      return res.status(401).json({
        message:
          'You cannot update the review because you are not its creator.',
      });
    }
  });

  // delete review by owner
  router.delete('/:id/reviews/:idreview', isRegular, async (req, res) => {
    const userID = req.user.id;
    const reviewID = req.params.idreview;

    const review = await reviewsService.getReview(reviewID);
    const { creator } = review;

    if (userID === creator.toString()) {
      const deleteReview = await reviewsService.deleteReview(reviewID);
      return res.status(200).json(deleteReview);
    } else {
      return res.status(401).json({
        message:
          'You cannot delete the review because you are not its creator.',
      });
    }
  });
}

module.exports = movies;
