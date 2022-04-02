import { Response, Router } from "express";
import { registerRequest } from "./model/dto/request";

var express = require('express');
var router: Router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/reg', (req: registerRequest, res: Response, next) => {
  console.log(req.body);
  res.json({})
})

module.exports = router;
