import { validateRequest } from '../../common';
import express, { Request, Response } from 'express';
import { Todo } from '../../models/todo';

const router = express.Router();

router.post('/api/todos', validateRequest,
  async (req: Request, res: Response) => {

    const { title, userId } = req.body;

    const todo = Todo.build({
      title,
      userId,
      completed: false
    });
    await todo.save();

    res.status(201).send(todo);
  });

export { router as newTodoRouter };