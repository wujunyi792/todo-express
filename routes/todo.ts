import {Response, Router} from "express";

const express = require("express");
const router: Router = express.Router();

router.get("/list",((req, res:Response) => {
    res.jsonSuccess()
}))

module.exports = router;
