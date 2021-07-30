import { ICreateTagDTO } from "../DTO/ICreateTagDTO";
import { Tag } from "../infra/typeorm/entities/Tag";

interface ITagsRepository {
  create(data: ICreateTagDTO): Promise<void>;
  list(): Promise<Tag[]>;
}

export { ITagsRepository };
