import { Router } from 'express';
import { CustomersController } from '../controllers/CustomersController';
import { MoviesController } from '../controllers/MoviesController';

const administratorRoutes = Router();

const customersController = new CustomersController();

administratorRoutes.get('administrator/customers', customersController.getAllCustomers)
administratorRoutes.get('administrator/customers/:id', customersController.getCustomerById)
administratorRoutes.post('/customers', customersController.createCustomer)
administratorRoutes.delete('/customers/:id', customersController.deleteCustomer)

const moviesController = new MoviesController();

administratorRoutes.get('administrator/movies', moviesController.getAllMovies)
administratorRoutes.get('administrator/movies/:id', moviesController.getMovieById)
administratorRoutes.post('administrator/movies', moviesController.createMovie)
administratorRoutes.put('administrator/movies/:id', moviesController.updateMovie)
administratorRoutes.delete('administrator/movies/:id', moviesController.deleteMovie)

export { administratorRoutes };