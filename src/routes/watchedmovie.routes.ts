import { Router } from 'express';

import ListWatchedMoveis from '../services/ListWatchedMoveis';
import CreateWatchedMoveis from '../services/CreateWatchedMoveis';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const watchedmovieRouter = Router();

watchedmovieRouter.use(ensureAuthenticated);

watchedmovieRouter.post('/list', async (request, response) => {
    try {
        const listWatchedMoveis = new ListWatchedMoveis();

        const { profile_id } = request.body;
        
        const watchedMoveis = await listWatchedMoveis.execute({
            profile_id
        })

        return response.json(watchedMoveis);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

watchedmovieRouter.post('/', async (request, response) => {
    try {
        const createWatchedMoveis = new CreateWatchedMoveis();

        const { id, title, genre, genre_id, profile_id, watched } = request.body;

        const watchedMoveis = await createWatchedMoveis.execute({
            id,
            title,
            genre,
            genre_id,
            profile_id,
            watched
        })

        return response.json(watchedMoveis);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});


export default watchedmovieRouter;