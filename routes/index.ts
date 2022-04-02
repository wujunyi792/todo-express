import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

router.get("/", function (req: Request, res: Response, next) {
  // console.log(req.headers);

  res.jsonSuccess({
    host: req.headers.host,
    UA: req.headers["user-agent"],
  });
});

module.exports = router;
