import { NotFoundError } from '../../common';
import express, { Request, Response } from 'express';
import { Todo } from '../../models/todo';

const router = express.Router();

router.put('/api/todos/:todoId',
  async (req: Request, res: Response) => {
    const { todoId } = req.params;

    const todo = await Todo.findById(todoId);

    if (!todo) {
      throw new NotFoundError();
    }

    const { completed } = req.body;
    todo.completed = completed;
    await todo.save();

    res.status(204).send(todo);
  });

export { router as updateTodoRouter };