import { ICreateGameDTO } from "../DTO/ICreateGameDTO";

interface IGamesRepository {
  create(data: ICreateGameDTO): Promise<void>;
}

export { IGamesRepository };
