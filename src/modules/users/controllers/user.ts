import { Request, Response } from 'express';
import { Get, JsonController, Param, Req, Res } from 'routing-controllers';

import { HttpStatusError } from '@shared/errors/HttpStatusError';
import { HttpStatus } from '@shared/web/HttpStatus';

@JsonController('/users')
export class UsersController {
  @Get()
  async listAll(@Req() request: Request, @Res() response: Response): Promise<Response> {
    return response.status(200).json({ ok: true });
  }

  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<Response> {
    throw new HttpStatusError(HttpStatus.BAD_REQUEST, `Impossível Localizar o ID: ${id}`);
  }
}
