import { Schema, model, HydratedDocument  } from "mongoose";
import { db } from "../mongo/db";
import { Users } from "../routes/model/sql/user";

const UserSchema: Schema = new Schema<Users>(
  {
    username: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    salt: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);


export const UserModel = db.model('Users', UserSchema)

const doc: HydratedDocument<Users> = new UserModel({
    username:"aaa",
    password: "aaa",
    phone: "aaa",
    salt: "aaa"
})
doc.save()