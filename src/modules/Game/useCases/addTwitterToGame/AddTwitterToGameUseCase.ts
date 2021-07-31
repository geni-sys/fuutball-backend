import { inject, injectable } from "tsyringe";
import { v4 as uuidV4 } from "uuid";

import { IGamesRepository } from "@modules/Game/Repositories/IGamesRepository";

interface ITwitter {
  id: string;
  code: string;
}

@injectable()
class AddTwitterToGameUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(game: string, code: string): Promise<void> {
    const gameData = await this.gamesRepository.findById(game);

    const gameTwitters = JSON.parse(gameData.twitters) as ITwitter[];
    const newTwitter = { id: uuidV4(), code };

    gameTwitters.push(newTwitter);
    Object.assign(gameData, {
      twitters: gameTwitters,
    });

    await this.gamesRepository.create(gameData as any);
  }
}
export { AddTwitterToGameUseCase };
