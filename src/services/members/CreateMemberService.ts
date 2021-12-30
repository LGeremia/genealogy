import { getCustomRepository } from "typeorm";
import { MemberRepositories } from "../../repositories/MembersRepositories";


interface IMemberRequest {
    name: string,
    birth_date: Date,
    death_date: Date
}

class CreateMemberService {
    async execute({ name, birth_date, death_date }: IMemberRequest) {
        const memberRepositoriy = getCustomRepository(MemberRepositories);

        const memberAlreadExists = await memberRepositoriy.findOne({ name });

        if (memberAlreadExists) {
            throw new Error("User alread exists!");
        }

        const member = memberRepositoriy.create({
            name,
            birth_date,
            death_date
        });

        await memberRepositoriy.save(member);

        return member;
    }
}

export { CreateMemberService }