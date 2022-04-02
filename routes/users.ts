import { Response, Router } from "express";
import { TestDB } from "../controllers/user";
import { registerRequest } from "../model/dto/request";
import { UserModel } from "../model/sql/user";

var express = require("express");
var router: Router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/reg", async (req: registerRequest, res: Response, next) => {
  if (!(req.body.username && req.body.password && req.body.phone)) {
    res.status(502).json({
      code: 50201,
      message: "参数错误",
    });
    return
  }
  const re = await UserModel.create(req.body)
    .then((res) => res._id)
    .catch((err) => {
      console.log(err);
      return null;
    })

  if(!re){
    res.status(402).json({
      code: 40201,
      message: "用户名或手机号不可注册",
    });
    return
  }
  res.json({
    code: 20000,
    message: "success",
  });
});

module.exports = router;
