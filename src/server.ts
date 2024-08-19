import express, { Request, Response } from 'express';
import path from 'path';
import { administratorRoutes } from './routes/AdministratorRoutes';
import { customersRoutes } from './routes/CustomersRoutes';
import { moviesRoutes } from './routes/MoviesRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(administratorRoutes);
app.use(customersRoutes);
app.use(moviesRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Route to Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

