import {JwtModel} from "../utils/jwt";

export * from 'express-serve-static-core'
declare module 'express-serve-static-core' {
    interface Response {
        jsonSuccess: (result?: any, code?: 200, message?: 'success') => void
        preProcessing: (data: any) => void
        jsonFail: (code: number, message?: string, extra?: any) => void
        User: JwtModel
    }
}
