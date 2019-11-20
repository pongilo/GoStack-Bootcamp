import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddlware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlware); // Middlware global, todos as rodas abaixo nao tera acesso se nao for autenticado

routes.put('/users', UserController.update);

export default routes;
