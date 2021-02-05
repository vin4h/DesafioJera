import { Router } from 'express';

import MaxGenreMoviesService from '../services/MaxGenreMoviesService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const moviesRouter = Router();

moviesRouter.use(ensureAuthenticated);

moviesRouter.post('/maxgenre', async (request, response) => {
    try {
        const maxMovies = new MaxGenreMoviesService();

        const { profile_id } = request.body;
        
        const genre_id = await maxMovies.execute({
            profile_id
        })

        return response.json(genre_id);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default moviesRouter;
