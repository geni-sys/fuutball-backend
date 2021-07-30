import { Router } from "express";

import { CreateTagController } from "@modules/Game/useCases/createTag/CreateTagController";
import { ListTagsController } from "@modules/Game/useCases/listTags/ListTagsController";

const tagsRoutes = Router();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

tagsRoutes.post("/", createTagController.handle);
tagsRoutes.get("/", listTagsController.handle);

export { tagsRoutes };
