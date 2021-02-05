import { Router } from 'express';
import ProfileController from '../controller/ProfileController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();

profileRouter.use(ensureAuthenticated);

const profileController = new ProfileController();

profileRouter.post('/', async (request, response) => {
    try {

        const { name } = request.body;

        const { user_id } = request.user;

        const profile = await profileController.create({
            name,
            user_id
        })


        return response.json(profile);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default profileRouter;