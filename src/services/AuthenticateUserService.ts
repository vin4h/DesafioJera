import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import User from '../models/User';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({
            relations: ['profiles'],
            where: {
                email
            }
        });

        if (!user) {
            throw Error('E-mail ou senha incorretos');
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw Error('E-mail ou senha incorretos');
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn
        });

        return {
            user,
            token,
        }

    }
}

export default AuthenticateUserService;