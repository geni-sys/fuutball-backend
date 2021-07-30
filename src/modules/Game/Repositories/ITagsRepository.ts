import { ICreateTagDTO } from "../DTO/ICreateTagDTO";

interface ITagsRepository {
  create(data: ICreateTagDTO): Promise<void>;
}

export { ITagsRepository };
