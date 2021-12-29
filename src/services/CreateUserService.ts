import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import bcrypt from "bcryptjs";


interface IUserRequest {
    username: string,
    email: string,
    salt: number,
    password: string
}

class CreateUserService {
    async execute({ username, email, salt, password }: IUserRequest) {
        const usersRepositoriy = getCustomRepository(UserRepositories);

        if (!email) {
            throw new Error("Email incorrect!");
        }

        const userAlreadExists = await usersRepositoriy.findOne({ email });

        if (userAlreadExists) {
            throw new Error("User alread exists!");
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepositoriy.create({
            username,
            email,
            salt,
            password: passwordHash
        });

        await usersRepositoriy.save(user);

        return user;
    }
}

export { CreateUserService }