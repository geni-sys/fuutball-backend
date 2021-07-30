import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTagUseCase } from "./CreateTagUseCase";

class CreateTagController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createTagUseCase = container.resolve(CreateTagUseCase);

    const { players, metadata } = request.body;

    createTagUseCase.execute({
      players,
      metadata,
    });

    return response.status(201).json();
  }
}
export { CreateTagController };
