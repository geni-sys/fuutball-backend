import "reflect-metadata";
import "express-async-errors";

import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";

// TSYRINGE container
import "@shared/container";
import "@shared/infra/typeorm";
import { AppError } from "@shared/errors/AppError";

import { routes } from "./routes";

dotenv.config({});

const app = express();

/**
 * App middleware
 */
app.use(express.json());
app.use(routes);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal Server Error - ${error.message}`,
    });
  }
);

export { app };
