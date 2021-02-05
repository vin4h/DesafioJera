import SignInService from '../services/SignInService';
import AuthenticateUserService from '../services/AuthenticateUserService';
import User from '../models/User';

interface Auth {
    token: string,
    user: User
}

interface AuthHeader {
    authHeader: string
}

interface Login {
    email: string,
    password: string,
}

class AuthenticationController {
    public async session({ authHeader }: AuthHeader): Promise<Auth> {
        if (!authHeader) {
            throw new Error('Usuário sem autenticação');
        }
        const authService = new AuthenticateUserService();

        const [, headerToken] = authHeader.split(' ');

        const auth = authService.execute({ headerToken })

        return auth;
    }

    public async signIn({email, password}:Login):Promise<Auth>{
        const signInservice = new SignInService();

        const signIn = signInservice.execute({
            email,
            password
        })

        return signIn;
    }
}

export default AuthenticationController;