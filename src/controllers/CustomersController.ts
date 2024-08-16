import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CustomersController {

  // GET all customers
  async getAllCustomers(req: Request, res: Response) {
    try {
      const customers = await prisma.customer.findMany();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Error trying to get all customers!' });
    }
  }

  // GET customer by ID
  async getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const customer = await prisma.customer.findUnique({
        where: { id: parseInt(id) },
      });
      if (customer) {
        res.status(200).json(customer);
      } else {
        res.status(404).json({ message: 'Customer not found!' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error trying to get customer!' });
    }
  }

  // POST to add a new customer
  async createCustomer(req: Request, res: Response) {
    const { name, login, collectionOfMovies } = req.body;
    try {
      if (!name || !login) {
        return res.status(400).json({ error: 'All fields required!' });
      }

      const newCustomer = await prisma.customer.create({
        data: { name, login },
      });
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(500).json({ error: 'Error trying to create a customer!' });
    }
  }

  // PUT to update customer
  async updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    const { name, login, collectionOfMovies } = req.body;
    try {
      const customer = await prisma.customer.update({
        where: { id: parseInt(id) },
        data: { name, login },
      });
      res.status(200).json(customer);
    } catch (error) {
      res.status(404).json({ message: 'Customer not found!' });
    }
  }

  // DELETE a customer by ID
  async deleteCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const customer = await prisma.customer.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json(customer);
    } catch (error) {
      res.status(404).json({ message: 'Customer not found!' });
    }
  }
}
