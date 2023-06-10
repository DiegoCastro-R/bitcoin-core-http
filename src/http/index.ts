import axios from 'axios';
require('dotenv').config();
const RPC_HOST = String(process.env.RPC_HOST);
const RPC_USERNAME = String(process.env.RPC_USERNAME);
const RPC_PASSWORD = String(process.env.RPC_PASSWORD);

async function makeRpcRequest(method: string, params: any[] = []) {
    const response = await axios.post(
        RPC_HOST,
        {
            method,
            params,
        },
        {
            auth: {
                username: RPC_USERNAME,
                password: RPC_PASSWORD,
            },
        }
    );

    return response.data.result;
}



export { makeRpcRequest }
