import { Router } from 'express';

import UserController from '../controller/UserController'

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', async (request, response) => {
    try {
        const { email, password, name, birthday, facebook_id } = request.body;

        const user = await userController.create({
            email,
            password,
            name,
            birthday,
            facebook_id
        });

        return response.json(user);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default userRouter;