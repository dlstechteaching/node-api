import { NotFoundError, NotAuthorizedError } from '../../common';
import express, { Request, Response } from 'express';
import { Todo } from '../../models/todo';

const router = express.Router();

router.get('/api/todos/:todoId', async (req: Request, res: Response) => {
  const todo = await Todo.findById(req.params.todoId);

  if (!todo) {
    throw new NotFoundError();
  }

  if (todo.userId != req.currentUser!.id) {
    throw new NotAuthorizedError();
  }

  res.send(todo);
});

export { router as showTodoRouter };