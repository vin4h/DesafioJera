import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateUserServicer from '../services/CreateUserService';
import UserRepository from '../repositories/UserRepository';

const userRouter = Router();


userRouter.post('/', async (request, response) => {
    try {
        const createUser = new CreateUserServicer();

        const {email, password, name, brithDate} = request.body;

        const user = await createUser.execute({
            email,
            password,
            name,
            brithDate
        });

        delete user.password;

        return response.json(user);
    } catch (error) {
        console.log(error)
        return response.status(400).json({ error: error.message })
    }
});

export default userRouter;