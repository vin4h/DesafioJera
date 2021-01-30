import { Router } from 'express';

const userRouter = Router();

userRouter.post('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

export default userRouter;