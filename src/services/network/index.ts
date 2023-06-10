import { Request, Response } from "express";
import { makeRpcRequest } from "../../http";

class NetworkRouterService {
    async getNetworkInfo(req: Request, res: Response) {
        const response = await makeRpcRequest('getnetworkinfo');
        return res.json({ response });
    }
}

export { NetworkRouterService }