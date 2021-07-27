import { inject, injectable } from "tsyringe";

import { Game } from "@modules/Game/infra/typeorm/entities/Game";
import { IGamesRepository } from "@modules/Game/Repositories/IGamesRepository";

@injectable()
class GetPrincipalGameUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(onWhatDate: string): Promise<Game> {
    return this.gamesRepository.getPrincipal(onWhatDate);
  }
}
export { GetPrincipalGameUseCase };
