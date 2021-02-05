import { Router } from 'express';
import AuthenticationController from '../controller/AuthenticationController';

const sessionsRouter = Router();

const authController = new AuthenticationController();

sessionsRouter.post('/', async (request, response) => {
    try {
        const authHeader = request.headers.authorization;

        const { user, token } = await authController.session({
            authHeader
        });

        delete user.password;

        return response.json({ user, token });
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default sessionsRouter;