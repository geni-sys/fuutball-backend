import { inject, injectable } from "tsyringe";

import { ITagsRepository } from "@modules/Game/Repositories/ITagsRepository";

interface IRequest {
  players: string;
  metadata: {
    event: string;
    date: string;
  };
}

@injectable()
class CreateTagUseCase {
  constructor(
    @inject("TagsRepository")
    private tagsRepository: ITagsRepository
  ) {}

  async execute({ players, metadata }: IRequest): Promise<void> {
    await this.tagsRepository.create({ players, metadata });
  }
}
export { CreateTagUseCase };
