import express, { Request, Response } from "express";
import "express-async-errors";
import { AppError } from "./errors/AppError";
import { handleErrorMiddleware } from "./errors/HandleError/handleError.middleware";

export const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Bem vindo ao portfólio de contatos!",
  });
});

app.use(handleErrorMiddleware);
