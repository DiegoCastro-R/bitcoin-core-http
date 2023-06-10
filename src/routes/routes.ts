import { Router, Request, Response } from "express";
import { BlockchainRouter } from "./blockchain";
import { NetworkRouter } from "./network";

const AppRoutes = Router();

AppRoutes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'API is Alive!' });
})

AppRoutes.use('/blockchain', BlockchainRouter)
AppRoutes.use('/network', NetworkRouter)

export { AppRoutes }