import { Router } from 'express';

import FindProfileService from '../services/FindProfilesService';

import CreateProfileService from '../services/CreateProfileService';

const profileRouter = Router();

profileRouter.get('/', async (request, response) => {
    try {

        const {user_id} = request.body

        const findProfiles = new FindProfileService();

        const profiles = await findProfiles.execute({
            user_id
        });

        return response.json(profiles);

    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

profileRouter.post('/', async (request, response) => {
    try {
        const createProfile = new CreateProfileService();

        const { name, user_id } = request.body;

        const profile = await createProfile.execute({
            name,
            user_id
        })

        delete profile.user.password;

        return response.json(profile);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default profileRouter;