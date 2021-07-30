import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTagsUseCase } from "./ListTagsUseCase";

class ListTagsController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const listTagsUseCase = container.resolve(ListTagsUseCase);

    const tags = await listTagsUseCase.execute();

    return response.status(200).json(tags);
  }
}
export { ListTagsController };
