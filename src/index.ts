import express from 'express';
import { createServer } from 'http';
import modules from './modules/index.js';
import { config } from 'dotenv';

config();

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(modules);

server.listen(3001, () => console.log(`Server started on port: ${3001}`));
