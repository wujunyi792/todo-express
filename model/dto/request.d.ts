import { Request } from "express";

export interface registerRequest extends Request {
  body: {
    username: string;
    password: string;
    phone: string;
  };
}

export interface loginRequest extends Request {
  body: {
    info: string;
    password: string;
  };
}
