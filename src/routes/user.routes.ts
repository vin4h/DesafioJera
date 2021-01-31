import { Router } from 'express';

import CreateUserServicer from '../services/CreateUserService';

const userRouter = Router();


userRouter.post('/', async (request, response) => {
    try {
        const createUser = new CreateUserServicer();

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

export default userRouter;