import "reflect-metadata";
import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import "express-async-errors"

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
});

app.listen(process.env.PORT, () => {
    return console.log(`server is listening on ${process.env.PORT}`);
});