import { Router } from 'express';
import MovieController from '../controller/MovieController';


import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const watchListRouter = Router();

watchListRouter.use(ensureAuthenticated);

const movieController = new MovieController();

watchListRouter.post('/list', async (request, response) => {
    try {
        const { profile_id } = request.body;

        const watcheList = await movieController.watchList({
            profile_id
        })

        return response.json(watcheList);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

watchListRouter.post('/', async (request, response) => {
    try {

        const { id, title, genre_ids, profile_id, to_watch } = request.body;

        const watchList = await movieController.createWatch({
            id,
            title,
            genre_ids,
            profile_id,
            to_watch
        })

        return response.json(watchList);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});


export default watchListRouter;