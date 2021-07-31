import { ICreateGameDTO } from "../DTO/ICreateGameDTO";
import { Game } from "../infra/typeorm/entities/Game";

interface IGamesRepository {
  create(data: ICreateGameDTO): Promise<void>;
  list(): Promise<Game[]>;
  getPrincipal(onWhatDate: string): Promise<Game>;
  setPrincipal(game: string, onWhatDate: string): Promise<void>;
  findById(id: string): Promise<Game>;
}

export { IGamesRepository };
