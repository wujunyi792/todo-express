import {Response, Router} from "express";
import {loginRequest, registerRequest} from "../model/dto/request";
import {User, UserModel} from "../model/sql/user";

const express = require("express");
const router: Router = express.Router();

router.post("/reg", (req: registerRequest, res: Response, next) => {
    if (!(req.body.username && req.body.password && req.body.phone)) {
        res.jsonFail(402)
        return
    }
    if(!(/^1[3456789]\d{9}$/.test(req.body.phone))){
        res.jsonFail(402,"手机号校验不通过")
        return
    }

    if(!(/[a-zA-Z]/.test(req.body.username))){
        res.jsonFail(402,"用户名不能为纯数字")
        return
    }


    UserModel.create(req.body)
        .then((response) => {
            if (response._id) {
                res.jsonSuccess(200)
            }
        })
        .catch((err) => {
            // console.log(err);
            res.jsonFail(202, "用户名或手机号已被注册")
        })
});

router.post("/login", async (req: loginRequest, res: Response, next) => {
    if (!(req.body.info && req.body.password)) {
        res.jsonFail(402)
        return
    }
    const model = await UserModel.find({
        $or: [{username: req.body.info}, {phone: req.body.info}]
    }).exec().then(res => res).catch(e => {return []})
    if(!model.length){
        res.jsonFail(401, "用户名或密码错误")
        return
    }
    if (!User.VerifyPassword(req.body.password, model[0])){
        res.jsonFail(401, "用户名或密码错误")
        return
    }

    res.jsonSuccess({
        token: User.GenToken(model[0])
    })
})

module.exports = router;
