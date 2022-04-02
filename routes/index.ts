import { Request, Response } from "express";

var express = require("express");
var router = express.Router();

router.get("/", function (req: Request, res: Response, next) {
  console.log(req.headers);

  res.json({
    host: req.headers.host,
    UA: req.headers["user-agent"],
  });
});

module.exports = router;
