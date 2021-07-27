import { Router } from "express";

import { CreateGameController } from "@modules/Game/useCases/CreateGame/CreateGameController";

const gameRoutes = Router();

const createGameController = new CreateGameController();

gameRoutes.post("/fuutball", createGameController.handle);

export { gameRoutes };
