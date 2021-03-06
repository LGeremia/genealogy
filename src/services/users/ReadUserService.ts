import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { instanceToPlain } from "class-transformer"

class ReadUserService {
    async execute() {
        const usersRepository = getCustomRepository(UsersRepositories);

        const users = await usersRepository.find();

        return instanceToPlain(users);
    }
}

export { ReadUserService }