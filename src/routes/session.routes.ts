import { Router } from 'express';

const sessionsRouter = Router();


sessionsRouter.post('/', async (request, response) => {
    try {


        return response.json({ ok: true });
    } catch (error) {
        console.log(error)
        return response.status(400).json({ error: error.message })
    }
});

export default sessionsRouter;