import { NotFoundError } from '../../common';
import express, { Request, Response } from 'express';
import { Todo } from '../../models/todo';

const router = express.Router();

router.delete('/api/todos/:todoId',
  async (req: Request, res: Response) => {
    const { todoId } = req.params;

    console.log('todoId', todoId);
    

    const todo = await Todo.findById(todoId);

    if (!todo) {
      throw new NotFoundError();
    }

    await todo.delete();

    res.status(204).send(todo);

  });

export { router as deleteTodoRouter };