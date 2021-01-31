import { Router } from 'express';

import usersRouter from './user.routes';
import sessionsRouter from './session.routes';
import profileRouter from './profile.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profiles', profileRouter);

export default routes;