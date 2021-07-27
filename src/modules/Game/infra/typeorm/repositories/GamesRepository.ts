import { getRepository, Repository } from "typeorm";

import { ICreateGameDTO } from "@modules/Game/DTO/ICreateGameDTO";
import { IGamesRepository } from "@modules/Game/Repositories/IGamesRepository";

import { Games } from "../entities/Games";

class GamesRepository implements IGamesRepository {
  private repository: Repository<Games>;

  constructor() {
    this.repository = getRepository(Games);
  }

  async create({
    winner,
    twitters,
    times,
    metadata,
  }: ICreateGameDTO): Promise<void> {
    const serializedGames = {
      times: JSON.stringify(times, null, 2),
      twitters: JSON.stringify(twitters, null, 2),
      metadata: JSON.stringify(metadata, null, 2),
    };

    const game = this.repository.create({
      times: serializedGames.times,
      winner,
      metadata: serializedGames.metadata,
      twitters: serializedGames.twitters,
    });

    await this.repository.save(game);
  }
}

export { GamesRepository };
