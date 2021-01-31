import { getRepository } from 'typeorm';
import { v4 } from 'uuid';

import { hash } from 'bcryptjs';

import User from '../models/User';

interface Request {
    email: string,
    password: string,
    name: string,
    birthday: Date,
    facebook_id?: string,
}

class CreateUserService {
    public async execute({ email, password, name, birthday, facebook_id }: Request): Promise<User> {
        const userRepository = getRepository(User);

        const findEmail = await userRepository.findOne({
            where: { email }
        });

        if (findEmail) {
            throw Error('E-mail já está sendo utilizado');
        }

        if (facebook_id) {
            const findFacebookId = await userRepository.findOne({
                where: { facebook_id }
            });

            if (findFacebookId) {
                throw Error('Conta do facebook já vinculada a outro usuário');
            }
        }

        console.log(facebook_id)

        const hashedPassword = await hash(password, 8);

        const user = userRepository.create({
            id: v4(),
            email,
            password: hashedPassword,
            name,
            birthday,
            facebook_id,
        })

        await userRepository.save(user);

        return user;

    }
}

export default CreateUserService;