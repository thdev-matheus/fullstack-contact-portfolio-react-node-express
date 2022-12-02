import { Request, Response, NextFunction } from "express";
import { SchemaOf } from "yup";
import { IContactUpdate } from "../services/contact/types";

export const updateContactValidationFieldsMiddleware =
  (schema: SchemaOf<IContactUpdate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: IContactUpdate = req.body;

      await schema.validate(data, {
        abortEarly: true,
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
