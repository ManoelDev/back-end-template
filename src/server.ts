import 'reflect-metadata';
import express from 'express';
// import cors from 'cors';
import { SERVER_PORT } from '@config/env';
import { started } from '@shared/utils/started';
import { home } from '@shared/utils/home';

import { routes } from './routes';

const server = express();

server.use(express.json());
// server.use(cors());
routes(server);
server.get('/', home);

server.listen(SERVER_PORT, started);
