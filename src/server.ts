import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { FilmeInterface } from '../models/Filme';
import { ClienteInterface } from '../models/Cliente';

const app = express();
const port = 3000;
const filmesFilePath = path.join(__dirname, '../database', 'filmes.json');
const clientesFilePath = path.join(__dirname, '../database', 'clientes.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Função para escrever dados no arquivo
const writeDataToFile = (filePath: string, data: any[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// Função para ler dados do arquivo
const readDataFromFile = (filePath: string): any[] => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

// Função para escrever dados no arquivo de clientes
const writeClientesToFile = (data: ClienteInterface[]): void => {
  fs.writeFileSync(clientesFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// Função para escrever dados no arquivo de filmes
const writeFilmesToFile = (data: FilmeInterface[]): void => {
  fs.writeFileSync(filmesFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// Função para ler dados do arquivo de clientes
const readClientesFromFile = (): ClienteInterface[] => {
  const data = fs.readFileSync(clientesFilePath, 'utf8');
  return JSON.parse(data);
};

// Função para ler dados do arquivo de filmes
const readFilmesFromFile = (): FilmeInterface[] => {
  const data = fs.readFileSync(filmesFilePath, 'utf8');
  return JSON.parse(data);
};

// GET para obter todos os clientes
app.get('/clientes', (req, res) => {
  const clientes = readClientesFromFile();
  res.status(200).json(clientes);
});

// GET para obter todos os filmes
app.get('/filmes', (req, res) => {
  const filmes = readFilmesFromFile();
  res.status(200).json(filmes);
});

// GET para obter cliente pelo ID
app.get('/clientes/:id', (req, res) => {
  const clientes = readDataFromFile(clientesFilePath);
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (cliente) {
      res.status(200).json(cliente);
  } else {
      res.status(404).json({ message: 'Cliente não encontrado' });
  }
});

// GET para obter filme pelo ID
app.get('/filmes/:id', (req, res) => {
  const filmes = readDataFromFile(filmesFilePath);
  const filme = filmes.find(c => c.id === parseInt(req.params.id));
  if (filme) {
      res.status(200).json(filme);
  } else {
      res.status(404).json({ message: 'Filme não encontrado' });
  }
});

// POST para adicionar um novo cliente
app.post('/clientes', (req, res) => {
  const clientes = readClientesFromFile();
  const { nome, login, listaDeFilmes } = req.body;
  const novoCliente: ClienteInterface = {
      id: clientes.length ? clientes[clientes.length - 1].id + 1 : 1,
      nome, login, listaDeFilmes
  };
  // Verificar se todos os campos obrigatórios estão presentes
  if (!nome || !login) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  clientes.push(novoCliente);
  writeClientesToFile(clientes);
  res.status(201).send(novoCliente);
});

// POST para adicionar um novo filme
app.post('/filmes', (req, res) => {
  const filmes = readFilmesFromFile();
  const { titulo, sinopse, genero, classificacaoIndicativa } = req.body;

  // Verificar se todos os campos obrigatórios estão presentes
  if (!titulo || !sinopse || !genero || !classificacaoIndicativa) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  // Criar um novo filme
  const novoFilme: FilmeInterface = {
    id: filmes.length ? filmes[filmes.length - 1].id + 1 : 1,
    titulo, sinopse, genero, classificacaoIndicativa
  };

  filmes.push(novoFilme);
  writeFilmesToFile(filmes);
  res.status(201).json(novoFilme);
});

// PUT para atualizar um cliente
app.put('/clientes/:id', (req, res) => {
  const clientes = readDataFromFile(clientesFilePath);
  const index = clientes.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
      const { nome, login, listaDeFilmes } = req.body;
      clientes[index] = { id: req.params.id, nome, login, listaDeFilmes };
      writeDataToFile(clientesFilePath, clientes);
      res.status(200).json(clientes[index]);
  } else {
      res.status(404).json({ message: 'Cliente não encontrado' });
  }
});

// PUT para atualizar um filme
app.put('/filmes/:id', (req, res) => {
  const filmes = readDataFromFile(filmesFilePath);
  const index = filmes.findIndex(f => f.id === parseInt(req.params.id));
  if (index !== -1) {
      const { titulo, sinopse, genero, classificacaoIndicativa } = req.body;
      filmes[index] = { id: req.params.id, titulo, sinopse, genero, classificacaoIndicativa };
      writeDataToFile(filmesFilePath, filmes);
      res.status(200).json(filmes[index]);
  } else {
      res.status(404).json({ message: 'Filme não encontrado' });
  }
});

// DELETE um cliente pelo ID
app.delete('/clientes/:id', (req, res) => {
  const clientes = readDataFromFile(clientesFilePath);
  const index = clientes.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
      const [deletedCliente] = clientes.splice(index, 1);
      writeDataToFile(clientesFilePath, clientes);
      res.status(200).json(deletedCliente);
  } else {
      res.status(404).json({ message: 'Cliente não encontrado' });
  }
});

// DELETE um filme pelo ID
app.delete('/filmes/:id', (req, res) => {
  const filmes = readDataFromFile(filmesFilePath);
  const index = filmes.findIndex(f => f.id === parseInt(req.params.id));
  if (index !== -1) {
      const [deletedFilme] = filmes.splice(index, 1);
      writeDataToFile(filmesFilePath, filmes);
      res.status(200).json(deletedFilme);
  } else {
      res.status(404).json({ message: 'Filme não encontrado' });
  }
});