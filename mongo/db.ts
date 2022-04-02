const mongoose = require('mongoose');


const mongoDB = 'mongodb://todoadmin:123456@localhost:27017/todo?authSource=todo';
mongoose.connect(mongoDB, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

export const db  = mongoose.connection;
// console.log(db);


db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));