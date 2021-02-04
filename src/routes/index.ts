import { Router } from 'express';

import usersRouter from './user.routes';
import signIn from './signin.routes';
import sessionsRouter from './session.routes';
import profileRouter from './profile.routes';
import watchedMoveis from './watchedmovie.routes';
import watchlist from './watchlist.routes';

const routes = Router();

routes.use('/api/v1/users', usersRouter);
routes.use('/api/v1/signin', signIn);
routes.use('/api/v1/sessions', sessionsRouter);
routes.use('/api/v1/profiles', profileRouter);
routes.use('/api/v1/watchedmovies', watchedMoveis);
routes.use('/api/v1/watchlist', watchlist);

export default routes;