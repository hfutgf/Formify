import express from 'express';
import { createServer } from 'http';
import modules from './modules/index.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

config();

const app = express();
const server = createServer(app);

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use('/api', modules);

server.listen(3001, () => console.log(`Server started on port: ${3001}`));
