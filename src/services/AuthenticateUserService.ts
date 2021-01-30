import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/User';

interface Request {
    email: string,
    password: string
}

interface Response {
    user: User;
}

class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({
            where: { email }
        })

        if (!user) {
            throw Error('E-mail ou senha incorretos');
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw Error('E-mail ou senha incorretos');
        }

        return {
            user,
        }

    }
}

export default AuthenticateUserService;