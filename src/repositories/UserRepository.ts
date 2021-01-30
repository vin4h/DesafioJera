import User from '../models/User';

import { getMongoManager, EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
class UserRepository extends Repository<User> {
    public async verifyExistEmail(email: String): Promise<User | null> {
        const findEmail = await this.findOne({
            where: { email }
        })

        return findEmail || null;
    }
}

export default UserRepository;