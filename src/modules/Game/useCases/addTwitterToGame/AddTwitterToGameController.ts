import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddTwitterToGameUseCase } from "./AddTwitterToGameUseCase";

class AddTwitterToGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const addTwitterToGameUseCase = container.resolve(AddTwitterToGameUseCase);

    const { code } = request.body;
    const { game } = request.params;

    await addTwitterToGameUseCase.execute(game, code);

    return response.status(202).json();
  }
}
export { AddTwitterToGameController };
