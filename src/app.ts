import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import setupRoutes from './routes';
import { configs } from './configs';

const app = express();
app.use(express.json());
setupRoutes(app);

const port = configs.port || process.env.MYPORT || 8080;
console.log('Starting server...');
console.log('Environment:', {
    PORT: process.env.MYPORT,
    configPort: configs.port
});

app.listen(port, () => {
    console.log(`API server running on port ${port}`);
});