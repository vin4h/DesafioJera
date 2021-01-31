import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

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
            where: { email }
        });

        if (!user) {
            throw Error('E-mail ou senha incorretos');
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw Error('E-mail ou senha incorretos');
        }

        console.log(user.id.toString())

        const token = sign({}, 'c1584e57a1c98d3a8ffd994c92002205', {
            subject: user.id,
            expiresIn: '1d'
        });

        return {
            user,
            token,
        }

    }
}

export default AuthenticateUserService;