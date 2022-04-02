import { prop, defaultClasses, Ref, getModelForClass, pre } from "@typegoose/typegoose";
import * as Crypto from 'crypto';
import { db } from "../../mongo/db";
import * as stringRandom from 'string-random'
// import { Todo } from "./todo";

@pre<User>('save', function() {
  this.salt = stringRandom()
  const hash = Crypto.createHmac('sha512', this.salt);
  hash.update(this.password);
  this.password = hash.digest('hex')
})
export class User extends defaultClasses.TimeStamps{
  @prop({ required:true, unique:true, index:true })
  public username: string;
  @prop({ required: true })
  public password: string;
  @prop({ required: true })
  public phone: string;
  @prop({ required: false })
  public salt?: string;

  // @prop({ ref: () => Todo })
  // public todos?: Ref<Todo>[];
}



export const UserModel = getModelForClass(User, {
  existingConnection: db
})