import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UsersRepositories";
import { instanceToPlain } from "class-transformer"

class ReadUserService {
    async execute() {
        const usersRepository = getCustomRepository(UserRepositories);

        const users = await usersRepository.find();

        return instanceToPlain(users);
    }
}

export { ReadUserService }