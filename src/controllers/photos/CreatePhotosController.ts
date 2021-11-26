import { Request, Response } from "express";


class CreatePhotosController {
    async handle(req: Request, res: Response) {
        const { name, description, date, url } = req.body;
        const photo = await {
            "name": name,
            "description": description,
            "date": date,
            "url": url
        }
        return res.json(photo);
    }
}

export { CreatePhotosController }