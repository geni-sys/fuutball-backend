import { Request, Response } from "express";
import { container } from "tsyringe";

import { SetPrincipalGameUseCase } from "./SetPrincipalGameUseCase";

interface IRequest {
  game: string;
  onWhatDate: string;
}

class SetPrincipalGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const setPrincipalGameUseCase = container.resolve(SetPrincipalGameUseCase);

    const { game, onWhatDate } = request.body as IRequest;

    await setPrincipalGameUseCase.execute(game, onWhatDate);

    return response.json();
  }
}
export { SetPrincipalGameController };
