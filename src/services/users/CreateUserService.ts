import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { genSalt } from "bcrypt"


interface IUserRequest {
    username: string,
    email: string,
    password: string,
    salt: number
}

class CreateUserService {
    async execute({ username, email, salt, password }: IUserRequest) {
        const usersRepositoriy = getCustomRepository(UsersRepositories);
        if (!email) {
            return new Error("Email incorrect!");
        }

        const userAlreadExists = await usersRepositoriy.findOne({ email });

        if (userAlreadExists) {
            return new Error("User alread exists!");
        }

        const user = usersRepositoriy.create({
            username,
            email,
            salt,
            password
        });

        await usersRepositoriy.save(user);

        return user;
    }
}

export { CreateUserService }