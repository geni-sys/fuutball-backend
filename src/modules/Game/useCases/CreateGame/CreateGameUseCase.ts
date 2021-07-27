import { inject, injectable } from "tsyringe";

import { ICreateGameDTO } from "@modules/Game/DTO/ICreateGameDTO";
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
  }: ICreateGameDTO): Promise<void> {
    await this.gamesRepository.create({
      metadata,
      times,
      twitters,
      winner,
    });
  }
}
export { CreateGameUseCase };
