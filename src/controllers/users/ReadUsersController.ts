import { Request, Response } from "express";
import { ReadUserService } from "../../services/users/ReadUserService"

class ReadUsersController {
    async handle(req: Request, res: Response) {
        const readUsersService = new ReadUserService();
        const users = await readUsersService.execute();
        users.map(
            user => (
                { ...user, }
            )
        )
        return res.json(users);

    }
}
export { ReadUsersController }