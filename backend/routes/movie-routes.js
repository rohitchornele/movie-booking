const express = require('express');
const movieRouter = express.Router;

movieRouter.get('/', getAllMovies);
movieRouter.post('/add', getMovie);
movieRouter.get('/:id', getMovieById);