import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateGameUseCase } from "./CreateGameUseCase";

class CreateGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createGameUseCase = container.resolve(CreateGameUseCase);

    const { metadata, times, twitters, winner } = request.body;

    const newGame = await createGameUseCase.execute({
      metadata,
      times,
      twitters,
      winner,
    });

    return response.status(201).json(newGame);
  }
}

export { CreateGameController };
