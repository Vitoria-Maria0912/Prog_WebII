import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

