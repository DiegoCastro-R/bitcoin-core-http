import { Router } from "express";
import { BlockchainRouterService } from "../../services";

const BlockchainRouter = Router();


BlockchainRouter.get('/getblockcount', BlockchainRouterService.getBlockCount);
BlockchainRouter.get('/getblockchaininfo', BlockchainRouterService.getBlockchainInfo);
BlockchainRouter.get('/getbestblockhash', BlockchainRouterService.getBestBlockhash);
BlockchainRouter.get('/getblock', BlockchainRouterService.getBlock);
BlockchainRouter.get('/getblockfilter', BlockchainRouterService.getBlockFilter);
BlockchainRouter.get('/getblockhash', BlockchainRouterService.getBlockHash);
BlockchainRouter.get('/getblockheader', BlockchainRouterService.getBlockHeader);
BlockchainRouter.get('/getblockstats', BlockchainRouterService.getBlockStats);
BlockchainRouter.get('/getchaintips', BlockchainRouterService.getChainTips);
BlockchainRouter.get('/getchaintxstats', BlockchainRouterService.getChaintXStats);
BlockchainRouter.get('/getdifficulty', BlockchainRouterService.getDifficulty);
BlockchainRouter.get('/getmempoolancestors', BlockchainRouterService.getMempoolAncestors);
BlockchainRouter.get('/getmempooldescendants', BlockchainRouterService.getMempoolDescendants);
BlockchainRouter.get('/getmempoolentry', BlockchainRouterService.getMempoolEntry);
BlockchainRouter.get('/getmempoolinfo', BlockchainRouterService.getMempoolInfo);
BlockchainRouter.get('/getrawmempool', BlockchainRouterService.getRawMempool);
BlockchainRouter.get('/gettxout', BlockchainRouterService.getTxOut);
BlockchainRouter.get('/gettxoutproof', BlockchainRouterService.getTxOutProof);
BlockchainRouter.get('/gettxoutsetinfo', BlockchainRouterService.getTxOutSetInfo);
BlockchainRouter.post('/preciousblock', BlockchainRouterService.preciousBlock);
BlockchainRouter.get('/pruneblockchain', BlockchainRouterService.pruneBlockchain);
BlockchainRouter.get('/savemempool', BlockchainRouterService.saveMempool);
BlockchainRouter.get('/scantxoutset', BlockchainRouterService.scanTxOutSet);
BlockchainRouter.get('/verifychain', BlockchainRouterService.verifyChain);
BlockchainRouter.get('/verifytxoutproof', BlockchainRouterService.verifyTxOutProof);
//default route for 404
BlockchainRouter.get('*', (req, res) => {
    res.status(404).json({ error: "Not Found", message: "Endpoint not found. Refer to the [API documentation](https://example.com/api-docs) for available endpoints." });
});


export { BlockchainRouter };
