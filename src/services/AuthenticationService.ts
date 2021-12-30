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
            email: user.email,
            username: user.username
        }, "107811f1ffc7ee3b816b136c71f54ecb", {
            subject: user.user_id,
            expiresIn: "id"
        });

        return token;
    }
}

export { AuthenticationService }