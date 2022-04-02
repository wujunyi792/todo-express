import {Response} from "./middlewares/router";
import errorCode from "./middlewares/error";

const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const todoRouter = require('./routes/todo');

import {responseHandle} from "./middlewares/responseHandle";
import {jwtVerifyHandle} from "./middlewares/jwtVerify";

export const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(responseHandle)

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(jwtVerifyHandle)

app.use('/todo', todoRouter)

