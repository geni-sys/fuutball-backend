import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetPrincipalGameUseCase } from "./GetPrincipalGameUseCase";

interface IRequest {
  onWhatDate: string;
}

class GetPrincipalGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getPrincipalGameUseCase = container.resolve(GetPrincipalGameUseCase);

    const { onWhatDate } = request.body as IRequest;

    const game = await getPrincipalGameUseCase.execute(onWhatDate);

    return response.json(game);
  }
}

export { GetPrincipalGameController };
