import express, { Request, Response } from 'express';
import path from 'path';
import { FilmeInterface } from '../models/Filme';

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
    res.status(200)
});

app.get('/filmes', (req, res) => {
  res.sendFile(path.join(__dirname, '../database', 'filmes.json'));
  res.status(200)
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

