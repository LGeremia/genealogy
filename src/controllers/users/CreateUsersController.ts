import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService"

class CreateUsersController {
    async handle(req: Request, res: Response) {
        const { username, email, password, salt } = req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({ username, email, password, salt })
        return res.json(user);
    }
}

export { CreateUsersController }