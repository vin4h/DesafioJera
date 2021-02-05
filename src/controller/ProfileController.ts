import CreateProfileService from '../services/CreateProfileService';
import Profile from "../models/Profile";

interface NewProfile {
    name: string,
    user_id: string
}
class ProfileController {
    public async create({ name, user_id }:NewProfile):Promise<Profile>{
        const createProfile = new CreateProfileService();

        const profile = createProfile.execute({
            name,
            user_id
        })

        return profile;
    }
}

export default ProfileController;