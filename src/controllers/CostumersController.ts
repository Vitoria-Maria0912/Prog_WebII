import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CustomersController {

  // GET all customers
  async getAll(req: Request, res: Response) {
    try {
      const customers = await prisma.client.findMany();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Error trying to get all customers!' });
    }
  }

  // GET client by ID
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const client = await prisma.client.findUnique({
        where: { id: parseInt(id) },
      });
      if (client) {
        res.status(200).json(client);
      } else {
        res.status(404).json({ message: 'Client not found!' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error trying to get client!' });
    }
  }

  // POST to add a new client
  async create(req: Request, res: Response) {
    const { name, login, collectionOfMovies } = req.body;
    try {
      if (!name || !login) {
        return res.status(400).json({ error: 'All fields required!' });
      }

      const newClient = await prisma.client.create({
        data: { name, login },
      });
      res.status(201).json(newClient);
    } catch (error) {
      res.status(500).json({ error: 'Error trying to create a client!' });
    }
  }

  // PUT to update client
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, login, collectionOfMovies } = req.body;
    try {
      const client = await prisma.client.update({
        where: { id: parseInt(id) },
        data: { name, login },
      });
      res.status(200).json(client);
    } catch (error) {
      res.status(404).json({ message: 'Client not found!' });
    }
  }

  // DELETE a client by ID
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const client = await prisma.client.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json(client);
    } catch (error) {
      res.status(404).json({ message: 'Client not found!' });
    }
  }
}
