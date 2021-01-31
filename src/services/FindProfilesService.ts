import { getRepository } from 'typeorm';

import Profile from '../models/Profile';

interface Request {
    user_id: string
}
class FindProfilesService {
    public async execute({ user_id }: Request): Promise<Profile[]> {
        const profileRepository = getRepository(Profile);

        const getAllProfiles = await profileRepository.find({
            where: { user_id }
        });

        return getAllProfiles;

    }
}

export default FindProfilesService;