
import { Request, Response } from "express";
import { AuthenticationService } from "../services/AuthenticationService";


class AuthenticationController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticationService();

        const token = await authenticateUserService.execute({
            email,
            password
        });

        return response.json(token);
    }
}

export { AuthenticationController }