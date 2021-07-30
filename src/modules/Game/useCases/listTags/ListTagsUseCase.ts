import { inject, injectable } from "tsyringe";

import { Tag } from "@modules/Game/infra/typeorm/entities/Tag";
import { ITagsRepository } from "@modules/Game/Repositories/ITagsRepository";

@injectable()
class ListTagsUseCase {
  constructor(
    @inject("TagsRepository")
    private tagsRepository: ITagsRepository
  ) {}

  async execute(): Promise<Tag[]> {
    return this.tagsRepository.list();
  }
}
export { ListTagsUseCase };
