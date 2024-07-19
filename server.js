const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/filmes', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http:localhost:${port}/`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/filmes?id=', (req, res) => {
  const id = 1;
  const filmes: FilmeInterface[] = JSON.parse(path.join(__dirname, '../database', 'filmes.json'));
  const result = filmes.find(filme => filme.id === id);
  if (result != undefined) {
    res.sendFile(JSON.stringify(result));
  } else {
    res.status(404).send('Filme não encontrado');
  }
});

app.post('/filmes', (req, res) => {
  const dadosRecebidos = req.body;

  try {
    const jsonParsed = JSON.parse(JSON.stringify(dadosRecebidos));
    
    res.status(200).json({ mensagem: 'JSON válido', dados: jsonParsed });
  } catch (error) {
      res.status(400);
  }
});
