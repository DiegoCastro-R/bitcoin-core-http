import express from 'express'
import { AppRoutes } from '../routes'
import swaggerRouter from '../docs/swaggerConfig';
import path from 'path';
require('dotenv').config();

const requiredEnvVars = ['RPC_HOST', 'RPC_USERNAME', 'RPC_PASSWORD', 'PORT', 'APP_URL'];

// Check if any required environment variable is missing
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
    console.error(`Missing environment variable(s): ${missingEnvVars.join(', ')}`);
    process.exit(1);
}



const app = express()
app.use(express.json())
app.use(AppRoutes)
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/docs', swaggerRouter);


export { app }