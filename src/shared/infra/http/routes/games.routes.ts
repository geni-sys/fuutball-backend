import { Router } from "express";

import { CreateGameController } from "@modules/Game/useCases/CreateGame/CreateGameController";
import { GetPrincipalGameController } from "@modules/Game/useCases/GetPrincipalGame/GetPrincipalGameController";
import { SetPrincipalGameController } from "@modules/Game/useCases/SetPrincipalGame/SetPrincipalGameController";

const gameRoutes = Router();

const createGameController = new CreateGameController();
const getPrincipalGameController = new GetPrincipalGameController();
const setPrincipalGameController = new SetPrincipalGameController();

gameRoutes.post("/new/fuutball", createGameController.handle);
gameRoutes.post("/principal/fuutball", setPrincipalGameController.handle);
gameRoutes.get("/principal/fuutball", getPrincipalGameController.handle);

export { gameRoutes };
