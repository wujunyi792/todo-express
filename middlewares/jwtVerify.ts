import {Request, Response} from "express";
import {ValideToken} from "../utils/jwt";


export const jwtVerifyHandle =  (req:Request, res: Response, next) => {
    const token = req.headers.authorization
    if(!token){
        res.jsonFail(401, "非法访问")
        return
    }
    res.User = ValideToken(token)
    if (!res.User){
        res.jsonFail(401)
        return;
    }
    next()
}

