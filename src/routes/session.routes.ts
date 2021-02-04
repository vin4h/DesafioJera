import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();


sessionsRouter.post('/', async (request, response) => {
        try {
            const authHeader = request.headers.authorization;
        
        if (!authHeader) {
            throw new Error('Usuário sem autenticação');
        }

        const [, headerToken] = authHeader.split(' ');

        const authenticateUser = new AuthenticateUserService();

        const { user, token } = await authenticateUser.execute({
            headerToken
        });

        delete user.password;

        return response.json({ user, token });
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
});

export default sessionsRouter;