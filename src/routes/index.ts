import { Router } from 'express';

import usersRouter from './user.routes';
import sessionsRouter from './session.routes';
import profileRouter from './profile.routes';
import watchedMoveis from './watchedmovie.routes';
import watchlist from './watchlist.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profiles', profileRouter);
routes.use('/watchedmovies', watchedMoveis);
routes.use('/watchlist', watchlist);

export default routes;