import {sign, verify} from 'jsonwebtoken'

const secret: string = "114514"

export interface JwtModel {
    id: string,
    username: string,
    phone: string
}

export function Encode(model: JwtModel): string {
    return sign(
        {
            id: model.id,
            username: model.username,
            phone: model.phone
        },
        secret,
        {algorithm: 'HS256', expiresIn: "2h"}
    )
}

export function ValideToken(token: string): JwtModel | undefined {
    let data
    try {
        data = verify(token, secret, {algorithms: ['HS256']})
    } catch (e) {
        console.log(e)
        return undefined
    }

    return data
}
