import { getRepository } from 'typeorm';
import { v4 } from 'uuid';

import { hash } from 'bcryptjs';

import User from '../models/User';

interface Request {
    id: string
}

class CreateUserService {
    public async execute({ id }: Request): Promise<User> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({
            relations: ['profiles'],
            where: {
                id
            }
        })

        return user;

    }
}

export default CreateUserService;