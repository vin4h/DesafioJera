import User from '../models/User';

import { getMongoManager, EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
class UserRepository extends Repository<User> {
    
}

export default UserRepository;