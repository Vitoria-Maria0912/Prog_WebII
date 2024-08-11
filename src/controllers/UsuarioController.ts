import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClientesController {
  // GET todos os clientes
  async getAll(req: Request, res: Response) {
    try {
      const clientes = await prisma.cliente.findMany();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter clientes' });
    }
  }

  // GET cliente pelo ID
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const cliente = await prisma.cliente.findUnique({
        where: { id: parseInt(id) },
      });
      if (cliente) {
        res.status(200).json(cliente);
      } else {
        res.status(404).json({ message: 'Cliente não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter cliente' });
    }
  }

  // POST para adicionar um novo cliente
  async create(req: Request, res: Response) {
    const { nome, login, listaDeFilmes } = req.body;
    try {
      if (!nome || !login) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      const novoCliente = await prisma.cliente.create({
        data: { nome, login },
      });

      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar cliente' });
    }
  }

  // PUT para atualizar um cliente
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, login, listaDeFilmes } = req.body;
    try {
      const cliente = await prisma.cliente.update({
        where: { id: parseInt(id) },
        data: { nome, login },
      });
      res.status(200).json(cliente);
    } catch (error) {
      res.status(404).json({ message: 'Cliente não encontrado' });
    }
  }

  // DELETE um cliente pelo ID
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const cliente = await prisma.cliente.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json(cliente);
    } catch (error) {
      res.status(404).json({ message: 'Cliente não encontrado' });
    }
  }
}
