import { Router } from 'express';

import SignInService from '../services/SignInService';

const signInRouter = Router();


signInRouter.post('/', async (request, response) => {
    try {
        const createUser = new SignInService();

        const { email, password } = request.body;

        const { user, token } = await createUser.execute({
            email,
            password
        });

        delete user.password;

        return response.json({ user, token });
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default signInRouter;