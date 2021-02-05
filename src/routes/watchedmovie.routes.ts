import { Router } from 'express';
import MovieController from '../controller/MovieController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const watchedmovieRouter = Router();

watchedmovieRouter.use(ensureAuthenticated);

const movieController = new MovieController();

watchedmovieRouter.post('/list', async (request, response) => {
    try {
        const { profile_id } = request.body;

        const watchedMoveis = await movieController.listWatched({
            profile_id
        })

        return response.json(watchedMoveis);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

watchedmovieRouter.post('/', async (request, response) => {
    try {
        const { id, title, genre_ids, profile_id, watched } = request.body;

        const watchedMoveis = await movieController.createWatched({
            id,
            title,
            genre_ids,
            profile_id,
            watched
        })

        return response.json(watchedMoveis);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default watchedmovieRouter;