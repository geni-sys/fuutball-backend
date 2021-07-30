import { getRepository, Repository } from "typeorm";

import { ICreateTagDTO } from "@modules/Game/DTO/ICreateTagDTO";
import { ITagsRepository } from "@modules/Game/Repositories/ITagsRepository";

import { Tag } from "../entities/Tag";

class TagsRepository implements ITagsRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  async create({ id, players, metadata }: ICreateTagDTO): Promise<void> {
    const tag = this.repository.create({
      id,
      players,
      metadata: JSON.stringify(metadata, null, 2),
    });

    await this.repository.save(tag);
  }
}
export { TagsRepository };
