import errorCode from '../routes/error'
import {Response} from '../routes/router'

export const responseHandle =  (req, res: Response, next) => {
    res.jsonSuccess = (data?): void => {
        res.json({
            code: 200,
            message: 'success',
            data: data,
        })
    }
    res.jsonFail = (code, message): void => {
        res.json({
            code,
            msg: message || errorCode[code],
        })
    }
    next()
}
