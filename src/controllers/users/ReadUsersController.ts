import { Request, response, Response } from "express";
import { ReadUserService } from "../../services/users/ReadUserService"

class ReadUsersController {
    async handle(req: Request, res: Response) {
        const readUsersService = new ReadUserService();
        const users = await readUsersService.execute();

        if (users instanceof Error) {
            return res.status(400).json(users.message)
        }

        users.map(
            user => (
                { ...user, }
            )
        )
        return res.json(users);

    }
}
export { ReadUsersController }