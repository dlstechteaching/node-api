import express, { Request, Response } from 'express';
import { Todo } from '../../models/todo';

const router = express.Router();

router.get('/api/todos', async (req: Request, res: Response) => {
    const missions = await Todo.find({});
  
    res.send(missions);
  });
  
export { router as indexTodoRouter };