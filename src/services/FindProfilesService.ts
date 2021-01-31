import { getRepository } from 'typeorm';

import Profile from '../models/Profile';


class FindProfilesService {
    public async execute(): Promise<Profile[]> {
        const profileRepository = getRepository(Profile);

        const getAllProfiles = await profileRepository.find();

        return getAllProfiles;

    }
}

export default FindProfilesService;