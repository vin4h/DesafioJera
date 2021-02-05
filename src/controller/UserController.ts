import CreateUserService from '../services/CreateUserService';
import FindUserService from '../services/FindUserService';
import User from '../models/User';

interface CreateUser {
    email: string,
    password: string,
    name: string,
    birthday: Date,
    facebook_id?: string,
}

interface FindUser {
    id: string
}

class UserController {
    public async create({ email, password, name, birthday, facebook_id }: CreateUser): Promise<User> {
        let user = new User()

        const createUserService = new CreateUserService();

        user = await createUserService.execute({
            email,
            password,
            name,
            birthday,
            facebook_id
        });

        delete user.password;

        return user;

    }
}
export default UserController;