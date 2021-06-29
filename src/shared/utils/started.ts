import { NODE_ENV, NODE_VERSION, SERVER_URL, SERVER_PORT } from '@config/env';

export const started = (): void => {
  console.log(``);
  console.log(`Environment:\x1b[32m ${NODE_ENV} \x1b[0m`);
  console.log(`Node_Version:\x1b[32m ${NODE_VERSION} \x1b[0m`);
  console.log(`Running on:\x1b[32m ${SERVER_URL}:${SERVER_PORT} \x1b[0m`);
  console.log(``);
};
