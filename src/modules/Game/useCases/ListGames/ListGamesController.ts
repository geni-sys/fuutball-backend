import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListGamesUseCase } from "./ListGamesUseCase";

class ListGamesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const listGamesUseCase = container.resolve(ListGamesUseCase);

    const games = await listGamesUseCase.execute();

    return response.json(games);
  }
}
export { ListGamesController };
