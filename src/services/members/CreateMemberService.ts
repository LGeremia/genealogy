import { getCustomRepository } from "typeorm";
import { MemberRepositories } from "../../repositories/MembersRepositories";


interface IMemberRequest {
    name: string,
    birth_date: Date,
    death_date: Date,
    created_by: string
}

class CreateMemberService {
    async execute({ name, birth_date, death_date, created_by }: IMemberRequest) {
        const memberRepository = getCustomRepository(MemberRepositories);

        const memberAlreadExists = await memberRepository.findOne({ name });

        if (memberAlreadExists) {
            return new Error("User alread exists!");
        }

        const member = memberRepository.create({
            name,
            birth_date,
            death_date,
            created_by
        });

        await memberRepository.save(member);

        return member;
    }
}

export { CreateMemberService }