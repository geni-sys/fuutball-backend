import { Router } from "express";

import { AddTwitterToGameController } from "@modules/Game/useCases/addTwitterToGame/AddTwitterToGameController";
import { CreateGameController } from "@modules/Game/useCases/CreateGame/CreateGameController";
import { GetPrincipalGameController } from "@modules/Game/useCases/GetPrincipalGame/GetPrincipalGameController";
import { ListGamesController } from "@modules/Game/useCases/ListGames/ListGamesController";
import { SetPrincipalGameController } from "@modules/Game/useCases/SetPrincipalGame/SetPrincipalGameController";

const gameRoutes = Router();

const createGameController = new CreateGameController();
const getPrincipalGameController = new GetPrincipalGameController();
const setPrincipalGameController = new SetPrincipalGameController();
const listGames = new ListGamesController();
const addTwitterToGameController = new AddTwitterToGameController();

gameRoutes.post("/new/fuutball", createGameController.handle);
gameRoutes.post("/principal/fuutball", setPrincipalGameController.handle);
gameRoutes.post("/fuutball/twitter/:game", addTwitterToGameController.handle);
gameRoutes.get("/principal/fuutball", getPrincipalGameController.handle);
gameRoutes.get("/fuutball", listGames.handle);

export { gameRoutes };
