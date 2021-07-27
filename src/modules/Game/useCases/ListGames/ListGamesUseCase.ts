import { inject, injectable } from "tsyringe";

import { Game } from "@modules/Game/infra/typeorm/entities/Game";
import { IGamesRepository } from "@modules/Game/Repositories/IGamesRepository";

@injectable()
class ListGamesUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(): Promise<Game[]> {
    return this.gamesRepository.list();
  }
}

export { ListGamesUseCase };
