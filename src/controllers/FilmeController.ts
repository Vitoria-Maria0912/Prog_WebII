import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class FilmesController {
  // GET todos os filmes
  async getAll(req: Request, res: Response) {
    try {
      const filmes = await prisma.filme.findMany();
      res.status(200).json(filmes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter filmes' });
    }
  }

  // GET filme pelo ID
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const filme = await prisma.filme.findUnique({
        where: { id: parseInt(id) },
      });
      if (filme) {
        res.status(200).json(filme);
      } else {
        res.status(404).json({ message: 'Filme não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter filme' });
    }
  }

  // POST para adicionar um novo filme
  async create(req: Request, res: Response) {
    const { titulo, sinopse, genero, classificacaoIndicativa } = req.body;
    try {
      if (!titulo || !sinopse || !genero || !classificacaoIndicativa) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      const novoFilme = await prisma.filme.create({
        data: { titulo, sinopse, genero, classificacaoIndicativa },
      });

      res.status(201).json(novoFilme);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar filme' });
    }
  }

  // PUT para atualizar um filme
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { titulo, sinopse, genero, classificacaoIndicativa } = req.body;
    try {
      const filme = await prisma.filme.update({
        where: { id: parseInt(id) },
        data: { titulo, sinopse, genero, classificacaoIndicativa },
      });
      res.status(200).json(filme);
    } catch (error) {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  }

  // DELETE um filme pelo ID
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const filme = await prisma.filme.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json(filme);
    } catch (error) {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  }
}
