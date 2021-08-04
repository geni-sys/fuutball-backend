import { inject, injectable } from "tsyringe";

import { ICreateGameDTO } from "@modules/Game/DTO/ICreateGameDTO";
import { Game } from "@modules/Game/infra/typeorm/entities/Game";
import { IGamesRepository } from "@modules/Game/Repositories/IGamesRepository";

@injectable()
class CreateGameUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute({
    metadata,
    times,
    twitters,
    winner,
  }: ICreateGameDTO): Promise<Game> {
    const game = await this.gamesRepository.create({
      metadata,
      times,
      twitters,
      winner,
    });

    return game;
  }
}
export { CreateGameUseCase };
