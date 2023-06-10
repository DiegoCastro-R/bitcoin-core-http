import { Request, Response } from "express";
import { makeRpcRequest } from "../../http";

class BlockchainRouterService {
    /**
     * Retrieve the hash of the best (tip) block in the longest blockchain.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getBestBlockhash({ req, res }: { req: Request; res: Response; }): Promise<Response<any, Record<string, any>> | undefined> {
        try {
            const response = await makeRpcRequest('getbestblockhash');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }
    /**
   * Retrieve a block by its block hash.
   *
   * @param {Request} req - The Express Request object
   * @param {Response} res - The Express Response object
   * @returns {Promise<void>} A Promise that resolves when the operation is complete
   */
    async getBlock(req: Request, res: Response) {
        try {
            const { blockHash } = req.query;

            const response = await makeRpcRequest('getblock', [blockHash]);

            res.status(200).json({ response });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    /**
     * Retrieve various information about the blockchain.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getBlockchainInfo(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getblockchaininfo');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve the current block height in the longest blockchain.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getBlockCount(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getblockcount');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve the basic filter for a specified block.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getBlockFilter(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getblockfilter');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve the block hash of a specific block height.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getBlockHash(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getblockhash');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve the header of a block by its block hash.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getBlockHeader(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getblockheader');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve statistical information about a given block.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getBlockStats(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getblockstats');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve information about all known blockchain tips.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getChainTips(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getchaintips');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve statistics about the total number and rate of transactions in the blockchain.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getChaintXStats(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getchaintxstats');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve the current difficulty of the proof-of-work algorithm.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getDifficulty(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getdifficulty');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve all in-mempool ancestors for a given transaction.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getMempoolAncestors(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getmempoolancestors');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve all in-mempool descendants for a given transaction.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getMempoolDescendants(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getmempooldescendants');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve information about a specific transaction in the mempool.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getMempoolEntry(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getmempoolentry');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve information about the current state of the mempool.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getMempoolInfo(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getmempoolinfo');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve a list of transaction hashes in the mempool.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getRawMempool(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('getrawmempool');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve information about a specific unspent transaction output (UTXO).
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getTxOut(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('gettxout');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve a proof that a specific transaction is included in a block.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getTxOutProof(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('gettxoutproof');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Retrieve statistical information about the unspent transaction output set.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async getTxOutSetInfo(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('gettxoutsetinfo');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
 * Mark a block as precious, indicating it should not be pruned.
 *
 * @param {Request} req - The Express Request object
 * @param {Response} res - The Express Response object
 * @returns {Promise<void>} A Promise that resolves when the operation is complete
 */
    async preciousBlock(req: Request, res: Response) {
        try {
            const blockHash = req.query.blockHash as string;
            const response = await makeRpcRequest('preciousblock', [blockHash]);
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }


    /**
     * Prune blocks from the local blockchain up to a specified height or timestamp.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async pruneBlockchain(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('pruneblockchain');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Save the mempool to disk.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async saveMempool(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('savemempool');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Perform a scan of the unspent transaction output set for a given descriptor.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async scanTxOutSet(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('scantxoutset');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Verify the local blockchain database.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async verifyChain(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('verifychain');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Verify a proof that a specific transaction is included in a block.
     *
     * @param {Request} req - The Express Request object
     * @param {Response} res - The Express Response object
     * @returns {Promise<void>} A Promise that resolves when the operation is complete
     */
    async verifyTxOutProof(req: Request, res: Response) {
        try {
            const response = await makeRpcRequest('verifytxoutproof');
            return res.json({ response });
        } catch (err) {
            console.error(err);
        }
    }
}

export default new BlockchainRouterService();
