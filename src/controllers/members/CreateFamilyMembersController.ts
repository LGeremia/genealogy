import { Request, Response } from "express";
import { CreateMemberService } from "../../services/members/CreateMemberService";


class CreateFamilyMembersController {
    async handle(req: Request, res: Response) {
        const { name, birth_date, death_date, created_by } = req.body;
        const createMemberService = new CreateMemberService();
        const result = await createMemberService.execute({ name, birth_date, death_date, created_by })

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}

export { CreateFamilyMembersController }