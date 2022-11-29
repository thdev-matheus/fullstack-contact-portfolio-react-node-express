import { Request, Response, NextFunction } from "express";
import { SchemaOf } from "yup";
import { IContactRequest } from "../services/contact/types";

export const createContactValidationFieldsMiddleware =
  (schema: SchemaOf<IContactRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: IContactRequest = req.body;

      await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      next();
    } catch (err: any) {
      return res.status(400).json({
        status: "Error",
        code: 400,
        message: err.errors?.join(", "),
      });
    }
  };
