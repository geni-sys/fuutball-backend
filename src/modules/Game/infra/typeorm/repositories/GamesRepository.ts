import { getRepository, Repository } from "typeorm";

import { ICreateGameDTO } from "@modules/Game/DTO/ICreateGameDTO";
import { IGamesRepository } from "@modules/Game/Repositories/IGamesRepository";

import { Game } from "../entities/Game";
import { Principal } from "../entities/Principal";

class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;
  private PrincipalRepository: Repository<Principal>;

  constructor() {
    this.repository = getRepository(Game);
    this.PrincipalRepository = getRepository(Principal);
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

  async list(): Promise<Game[]> {
    return (await this.repository.find()).map((game) => {
      Object.assign(game, {
        times: JSON.parse(game.times),
        metadata: JSON.parse(game.metadata),
        twitters: JSON.parse(game.twitters),
      });

      return game;
    });
  }

  async getPrincipal(onWhatDate: string): Promise<Game> {
    const principal = await this.PrincipalRepository.findOne({
      where: {
        onWhatDate,
      },
    });

    const game = await this.repository.findOne(principal.game);
    Object.assign(game, {
      times: JSON.parse(game.times),
      metadata: JSON.parse(game.metadata),
      twitters: JSON.parse(game.twitters),
    });

    return game;
  }

  async setPrincipal(game: string, onWhatDate: string): Promise<void> {
    const principal = this.PrincipalRepository.create({
      game,
      onWhatDate,
    });

    await this.PrincipalRepository.save(principal);
  }
}

export { GamesRepository };
