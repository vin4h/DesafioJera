import { Router } from 'express';

import ListWatchList from '../services/ListWatchList';
import CreateWatchList from '../services/CreateWatchList';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const watchListRouter = Router();

watchListRouter.use(ensureAuthenticated);

watchListRouter.post('/list', async (request, response) => {
    try {
        const watchList = new ListWatchList();

        const { profile_id } = request.body;

        const watcheList = await watchList.execute({
            profile_id
        })

        return response.json(watcheList);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

watchListRouter.post('/', async (request, response) => {
    try {
        const createWatchlist = new CreateWatchList();

        const { id, title, genre, genre_id, profile_id, to_watch } = request.body;

        const watchList = await createWatchlist.execute({
            id,
            title,
            genre,
            genre_id,
            profile_id,
            to_watch
        })

        return response.json(watchList);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});


export default watchListRouter;