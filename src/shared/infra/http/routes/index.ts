import { Router } from "express";

import { gameRoutes } from "./games.routes";
import { tagsRoutes } from "./tags.routes";

const routes = Router();

routes.use("/", gameRoutes);
routes.use("/tags", tagsRoutes);

export { routes };
