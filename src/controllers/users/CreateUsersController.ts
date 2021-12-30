import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService"

class CreateUsersController {
    async handle(req: Request, res: Response) {
        const { username, email, password, salt } = req.body;
        const createUserService = new CreateUserService();
        const result = await createUserService.execute({ username, email, password, salt })

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}

export { CreateUsersController }