import { Request, Response } from "express";
import { User } from "../../entities/User";

class CreateUsersController {
    async handle(req: Request, res: Response) {
        const { username, email, password } = req.body;
        const user = await {
            "username": username,
            "email": email,
            "password": password
        }

        return res.json(user);
    }
}

export { CreateUsersController }