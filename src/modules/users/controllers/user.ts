import { Request, Response } from 'express';
import { Get, JsonController, Param, Req, Res } from 'routing-controllers';

@JsonController('/users')
export class UsersController {
  @Get()
  async listAll(@Req() request: Request, @Res() response: Response): Promise<Response> {
    return response.status(200).json({ ok: true });
  }

  @Get('/:id')
  async getUser(@Param('id') id: number, @Req() request: Request, @Res() response: Response): Promise<Response> {
    return response.status(200).json({ user: id });
  }
}
