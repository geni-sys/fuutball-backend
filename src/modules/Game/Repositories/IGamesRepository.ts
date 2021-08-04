import { Game } from "@modules/Game/infra/typeorm/entities/Game";

import { ICreateGameDTO } from "../DTO/ICreateGameDTO";

interface IGamesRepository {
  create(data: ICreateGameDTO): Promise<Game>;
  list(): Promise<Game[]>;
  getPrincipal(onWhatDate: string): Promise<Game>;
  setPrincipal(game: string, onWhatDate: string): Promise<void>;
  findById(id: string): Promise<Game>;
}

export { IGamesRepository };
