import { getCustomRepository } from 'typeorm';
import md5 from 'md5';

import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

interface Request {
    email: string,
    password: string,
    name: string,
    brithDate: Date
}

class CreateUserService {
    public async execute({ email, password, name, brithDate }: Request): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);
        const user = userRepository.create({
            email,
            password: md5(password),
            name,
            brithDate
        })

        await userRepository.save(user);

        return user;

    }
}

export default CreateUserService;