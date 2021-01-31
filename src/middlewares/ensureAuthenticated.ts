import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface Middleware {
    request: Request,
    response: Response,
    next: NextFunction
}

interface TokenPayload {
    iat: number,
    exp: number,
    sub: string
}

export default function ensureAuthenticated({ request, response, next }: Middleware): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error('Usuário sem autenticação');
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        const { sub } = decoded as TokenPayload;

        request.user = {
            id: sub
        }

        return next()
    } catch (error) {
        throw new Error('JWT invalido')
    }
}