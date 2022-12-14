import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { handleErrorMiddleware } from "./errors";
import { appRoutes } from "./routes";

export const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Bem vindo ao portfólio de contatos!",
  });
});

appRoutes(app);

app.use(handleErrorMiddleware);
