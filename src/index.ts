import express from 'express';
import { createServer } from 'http';
import modules from './modules/index.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerOptions from './config/swager.config.js';

config();

const app = express();
const server = createServer(app);
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api', modules);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

export default server;
