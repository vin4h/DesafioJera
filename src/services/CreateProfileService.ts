import { getRepository } from 'typeorm';
import { v4 } from 'uuid';

import Profile from '../models/Profile';
import User from '../models/User';


interface Request {
    name: string,
    user_id: string,
}

class FindProfileService {
    public async execute({ name, user_id }: Request): Promise<Profile> {
        const profileRepository = getRepository(Profile);

        const userRepository = getRepository(User);

        const findProfile = await profileRepository.findOne({
            where: { name },
            relations: ['user']
        });

        if (findProfile) {

            if (findProfile.user_id === user_id) {
                throw Error("Nome já utilizado");
            }
        }

        const user = await userRepository.findOne({
            relations: ['profiles'],
            where: {
                id: user_id
            }
        });

        if (!user) {
            throw Error("Identificação de usuário incorreta");
        }

        if(user.profiles.length >= user.max_profile){
            throw Error("Usuário já atingiu o maximo de 4 perfis")
        }

        const profile = profileRepository.create({
            user_id: v4(),
            name,
            user,
        });

        await profileRepository.save(profile);

        return profile;

    }
}

export default FindProfileService;