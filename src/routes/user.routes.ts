import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';
import FindUserService from '../services/FindUserService';

const userRouter = Router();


userRouter.post('/', async (request, response) => {
    try {
        const createUser = new CreateUserService();

        const { email, password, name, birthday, facebook_id } = request.body;

        const user = await createUser.execute({
            email,
            password,
            name,
            birthday,
            facebook_id
        });

        delete user.password;

        return response.json(user);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

userRouter.post('/findUser', async (request, response) => {
    try {
        const findUser = new FindUserService();

        const { id } = request.body;

        const user = await findUser.execute({
            id
        });

        delete user.password;

        return response.json(user);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
})

export default userRouter;