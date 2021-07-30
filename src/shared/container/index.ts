import { container } from "tsyringe";

import { GamesRepository } from "@modules/Game/infra/typeorm/repositories/GamesRepository";
import { TagsRepository } from "@modules/Game/infra/typeorm/repositories/TagsRepository";
import { IGamesRepository } from "@modules/Game/Repositories/IGamesRepository";
import { ITagsRepository } from "@modules/Game/Repositories/ITagsRepository";

container.registerSingleton<IGamesRepository>(
  "GamesRepository",
  GamesRepository
);
container.registerSingleton<ITagsRepository>("TagsRepository", TagsRepository);
