import { Router } from 'express';
import { MoviesController } from '../controllers/MoviesController';

const moviesRoutes = Router();
const moviesController = new MoviesController();

moviesRoutes.get('/movies', moviesController.getAllMovies)
moviesRoutes.get('/movies/:id', moviesController.getMovieById)
moviesRoutes.post('/movies', moviesController.createMovie)
moviesRoutes.put('/movies/:id', moviesController.updateMovie)
moviesRoutes.delete('/movies/:id', moviesController.deleteMovie)

export { moviesRoutes };