
import { Request, Response } from "express";
import { AuthenticationService } from "../services/AuthenticationService";


class AuthenticationController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const authenticateUserService = new AuthenticationService();

        const token = await authenticateUserService.execute({
            email,
            password
        });

        return res.json(token);
    }

    logout(req: Request, res: Response) {
        return res.json({ auth: false, token: null });
    }
}

export { AuthenticationController }