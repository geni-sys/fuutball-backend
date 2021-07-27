import { container } from "tsyringe";

import { GamesRepository } from "@modules/Game/infra/typeorm/repositories/GamesRepository";
import { IGamesRepository } from "@modules/Game/Repositories/IGamesRepository";

container.registerSingleton<IGamesRepository>(
  "GamesRepository",
  GamesRepository
);
