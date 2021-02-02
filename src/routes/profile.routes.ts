import { Router } from 'express';

import CreateProfileService from '../services/CreateProfileService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();

profileRouter.use(ensureAuthenticated);

profileRouter.post('/', async (request, response) => {
    try {
        const createProfile = new CreateProfileService();

        const { name } = request.body;

        const { id } = request.user;

        const profile = await createProfile.execute({
            name,
            id
        })


        return response.json(profile);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default profileRouter;