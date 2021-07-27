import { inject, injectable } from "tsyringe";

import { IGamesRepository } from "@modules/Game/Repositories/IGamesRepository";

@injectable()
class SetPrincipalGameUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(game: string, onWhatDate: string): Promise<void> {
    return this.gamesRepository.setPrincipal(game, onWhatDate);
  }
}

export { SetPrincipalGameUseCase };
