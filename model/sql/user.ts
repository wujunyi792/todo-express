import {prop, defaultClasses, Ref, getModelForClass, pre} from "@typegoose/typegoose";
import * as Crypto from 'crypto';
import {db} from "../../mongo/db";
import * as stringRandom from 'string-random'
import {Encode, JwtModel} from "../../utils/jwt";
import {guid} from "../../utils/uuid";

@pre<User>('save', function () {
    this._id = guid()
    this.salt = stringRandom()
    const hash = Crypto.createHmac('sha512', this.salt);
    hash.update(this.password);
    this.password = hash.digest('hex')
})

export class User extends defaultClasses.TimeStamps {
    @prop()
    public _id?: string;
    @prop({required: true, unique: true, index: true})
    public username: string;
    @prop({required: true})
    public password: string;
    @prop({required: true, unique: true, index: true})
    public phone: string;
    @prop({required: false})
    public salt?: string;

    public static GenToken(info: User): string {
        const model: JwtModel = {
            id: info._id,
            username: info.username,
            phone: info.phone
        }
        return Encode(model)
    }

    public static VerifyPassword(input:string, model:User):boolean{
        const hash = Crypto.createHmac('sha512', model.salt);
        hash.update(input);
        return hash.digest('hex') === model.password
    }
}

export const UserModel = getModelForClass(User, {
    existingConnection: db
})
