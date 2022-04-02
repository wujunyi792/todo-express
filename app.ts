import {Response} from "./routes/router";
import errorCode from "./routes/error";

const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
import {responseHandle} from "./middlewares/responseHandle";

export const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(responseHandle)

app.use('/', indexRouter);
app.use('/users', usersRouter);

