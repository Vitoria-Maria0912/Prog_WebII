import { Router } from 'express';
import { CustomersController } from '../controllers/CustomersController';
import { MoviesController } from '../controllers/MoviesController';

const customersRoutes = Router();
const customersController = new CustomersController();

customersRoutes.get('/customers', customersController.getAllCustomers)
customersRoutes.get('/customers/:id', customersController.getCustomerById)
customersRoutes.post('/customers', customersController.createCustomer)
customersRoutes.put('/customers/:id', customersController.updateCustomer)
customersRoutes.delete('/customers/:id', customersController.deleteCustomer)

const moviesController = new MoviesController();
customersRoutes.get('/movies', moviesController.getAllMovies)
customersRoutes.get('/movies/:id', moviesController.getMovieById)

export { customersRoutes };