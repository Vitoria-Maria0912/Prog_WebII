import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class MoviesController {

  // GET all movies
  async getAll(req: Request, res: Response) {
    try {
      const movies = await prisma.movie.findMany();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: 'Error trying to get all movies!' });
    }
  }

  // GET movie by ID
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const movie = await prisma.movie.findUnique({
        where: { id: parseInt(id) },
      });
      if (movie) {
        res.status(200).json(movie);
      } else {
        res.status(404).json({ message: 'Movie not found!' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error trying to get a movie!' });
    }
  }

  // POST to add a new movie
  async create(req: Request, res: Response) {
    const { title, synopsis, genre, ageRating } = req.body;
    try {
      if (!title || !synopsis || !genre || !ageRating) {
        return res.status(400).json({ error: 'All fields required!' });
      }

      const newMovie = await prisma.movie.create({
        data: { title, synopsis, genre, ageRating },
      });

      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({ error: 'Error trying to create a movie!' });
    }
  }

  // PUT to update movie
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, synopsis, genre, ageRating } = req.body;
    try {
      const movie = await prisma.movie.update({
        where: { id: parseInt(id) },
        data: { title, synopsis, genre, ageRating },
      });
      res.status(200).json(movie);
    } catch (error) {
      res.status(404).json({ message: 'Movie not found!' });
    }
  }

  // DELETE a movie by ID
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const movie = await prisma.movie.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json(movie);
    } catch (error) {
      res.status(404).json({ message: "Movie not found!" });
    }
  }
}
