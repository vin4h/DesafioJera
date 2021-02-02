import { Router } from 'express';

import ListWatchedMoveis from '../services/ListWatchedMoveis';
import CreateWatchedMoveis from '../services/CreateWatchedMoveis';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const watchedmovieRouter = Router();

watchedmovieRouter.use(ensureAuthenticated);

watchedmovieRouter.get('/', async (request, response) => {
    try {
        const listWatchedMoveis = new ListWatchedMoveis();

        const { id } = request.user;

        const watchedMoveis = await listWatchedMoveis.execute({
            id
        })

        return response.json(watchedMoveis);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

watchedmovieRouter.post('/watchedMovies', async (request, response) => {
    try {
        const createWatchedMoveis = new CreateWatchedMoveis();

        const { user_id } = request.user;

        const { id, title, genre } = request.body;

        const watchedMoveis = await createWatchedMoveis.execute({
            id,
            title,
            genre,
            user_id,
        })

        return response.json(watchedMoveis);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default watchedmovieRouter;