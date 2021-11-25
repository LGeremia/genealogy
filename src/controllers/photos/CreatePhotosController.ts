import { Request, Response } from "express";


class CreatePhotosController {
    async handle(req: Request, res: Response) {
        const { name, description, date } = req.body;
    }
}

export { CreatePhotosController }