import { Request, Response } from "express";

class CreateFamilyMemberController {
    async handle(req: Request, res: Response) {
        const { name, birthday } = req.body;
        const member = await {
            "name": name,
            "birthday": birthday
        }
        return res.json(member)
    }
}

export { CreateFamilyMemberController }