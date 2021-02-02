import { getRepository } from 'typeorm';
import { v4 } from 'uuid';

import Profile from '../models/Profile';
import User from '../models/User';


interface Request {
    name: string,
    id: string,
}

class CreateProfileService {
    public async execute({ name, id }: Request): Promise<Profile> {
        const profileRepository = getRepository(Profile);

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({
            relations: ['profiles'],
            where: {
                id
            }
        });

        if (!user) {
            throw Error("Identificação de usuário incorreta");
        }

        const findProfile = user.profiles.filter(profile => profile.name === name);

        if (findProfile.length > 0) {
            throw Error("Nome já utilizado");
        }


        if (user.profiles.length >= user.max_profile) {
            throw Error("Usuário já atingiu o maximo de 4 perfis")
        }

        const profile = profileRepository.create({
            id: v4(),
            name,
            user_id: user.id
        });

        user.profiles.push(profile);

        await profileRepository.save(profile);

        return profile;

    }
}

export default CreateProfileService;