import express, { Request, Response } from 'express';
import * as fs from 'fs';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/filmes', (req: Request, res: Response) => {
  res.send('Hello, world!');

});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
