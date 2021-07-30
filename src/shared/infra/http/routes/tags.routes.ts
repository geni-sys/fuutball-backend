import { Router } from "express";

import { CreateTagController } from "@modules/Game/useCases/createTag/CreateTagController";

const tagsRoutes = Router();

const createTagController = new CreateTagController();

tagsRoutes.post("/", createTagController.handle);

export { tagsRoutes };
