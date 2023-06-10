import { Router } from "express";
import { NetworkRouterService } from "../../services";

const NetworkRouter = Router()
const networkRouterService = new NetworkRouterService()
NetworkRouter.get('/getnetworkinfo', networkRouterService.getNetworkInfo)


export { NetworkRouter }
