import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError } from './common';
import { signinRouter } from './routes/users/signin';
import { signoutRouter } from './routes/users/signout';
import { signupRouter } from './routes/users/signup';
import { indexTodoRouter } from './routes/todos';
import { newTodoRouter } from './routes/todos/new';
import { showTodoRouter } from './routes/todos/show';
import { deleteTodoRouter } from './routes/todos/delete';
import { updateTodoRouter } from './routes/todos/update';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test', // working only in https
  })
);

app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(indexTodoRouter);
app.use(newTodoRouter);
app.use(deleteTodoRouter);
app.use(showTodoRouter);
app.use(updateTodoRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };