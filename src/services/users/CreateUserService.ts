import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UsersRepositories";


interface IUserRequest {
    username: string,
    email: string,
    password: string,
    salt: number
}

class CreateUserService {
    async execute({ username, email, password, salt }: IUserRequest) {
        const usersRepositoriy = getCustomRepository(UserRepositories);

        if (!email) {
            throw new Error("Email incorrect!");
        }

        const userAlreadExists = await usersRepositoriy.findOne({ email });

        if (userAlreadExists) {
            throw new Error("User alread exists!");
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