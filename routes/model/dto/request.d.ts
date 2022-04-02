import { Request } from "express";

export interface registerRequest extends Request {
  body: {
    username: string;
    password: string;
    phone: string;
  };
}
