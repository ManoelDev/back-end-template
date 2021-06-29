import path from 'path';

import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const {
  NODE_ENV,
  SHOW_DOCS,
  SERVER_URL,
  DB_SSL = false,
  DB_HOST,
  DB_COMPOSE_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  TOKEN_SECRET,
  TOKEN_EXPIRY,
} = process.env;

const DB_URL = process.env.DATABASE_URL || process.env.DB_URL;
const NODE_VERSION = process.versions.node;
const SERVER_PORT = Number(process.env.SERVER_PORT || process.env.PORT);
const DB_LOGGING_LEVEL = process.env.DB_LOGGING_LEVEL?.split(',');

export {
  NODE_ENV,
  NODE_VERSION,
  SHOW_DOCS,
  SERVER_URL,
  SERVER_PORT,
  DB_SSL,
  DB_URL,
  DB_HOST,
  DB_COMPOSE_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_LOGGING_LEVEL,
  TOKEN_SECRET,
  TOKEN_EXPIRY,
};
