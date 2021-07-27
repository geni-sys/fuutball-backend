import { Router } from "express";

import { gameRoutes } from "./games.routes";

const routes = Router();

/**
 * all routes to create new data
 */
routes.use("/", gameRoutes);

/**
 * all routes to update info
 */

/**
 * all routes to delete data
 */

export { routes };
