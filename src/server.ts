import express from 'express';
import cors from 'cors';
import { SERVER_PORT } from '@config/env';
import { started } from '@shared/utils/started';
import { home } from '@shared/utils/home';

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', home);

server.listen(SERVER_PORT, started);
