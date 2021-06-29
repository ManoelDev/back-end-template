import { Request, Response } from 'express';

import { NODE_ENV } from '@config/env';

type Greeting = {
  message: string;
  documentation: string;
  environment: string;
};

export const home = (_req: Request, res: Response): Response<Greeting> =>
  res.json({
    environment: NODE_ENV,
    message: 'Is a live!',
  });
