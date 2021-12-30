import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { sign } from "jsonwebtoken"

interface IAuthenticationRequest {
    email: string,
    password: string
}

class AuthenticationService {
    async execute({ email, password }: IAuthenticationRequest) {
        const userRepository = getCustomRepository(UsersRepositories);

        const user = await userRepository.findOne({ email });

        if (!user) {
            throw new Error("Email não cadastrado!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Senha não confere com o cadastro!");
        }

        const token = sign({
            subject: user.user_id,
            email: user.email,
            username: user.username
        }, process.env.SECRET, {
            expiresIn: 300
        });

        return token;
    }
}

export { AuthenticationService }