import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import MovieController from '../controller/MovieController';

const moviesRouter = Router();

moviesRouter.use(ensureAuthenticated);

const movieController = new MovieController();

moviesRouter.post('/maxgenre', async (request, response) => {
    try {
        const { profile_id } = request.body;
        
        const genre_id = await movieController.maxGenre({
            profile_id
        })

        return response.json(genre_id);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default moviesRouter;
