import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

interface Request {
    email: string,
    password: string,
    name: string,
    brithDate: Date
}

class CreateUserService {
    public async execute({ email, password, name, brithDate }: Request): Promise<User> {
        const userRepository = getRepository(User);

        const findEmail = await userRepository.findOne({
            where: { email }
        });
        console.log(findEmail);

        if (findEmail) {
            throw Error('E-mail já está sendo utilizado');
        }

        const hashedPassword = await hash(password, 8);

        const user = userRepository.create({
            email,
            password: hashedPassword,
            name,
            brithDate
        })

        await userRepository.save(user);

        return user;

    }
}

export default CreateUserService;