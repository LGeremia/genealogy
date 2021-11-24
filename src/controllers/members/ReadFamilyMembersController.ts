import { Request, Response } from "express";

class ReadFamilyMembersController {
    async handler(req: Request, res: Response) {
        const member = await {
            name: "Leonardo",
            birthday: "1998-01-20",
            created_at: "2021-11-23",
            updated_at: "2021-11-23"
        }

        return res.json(member);
    }
}

export { ReadFamilyMembersController }