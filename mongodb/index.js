import mongoose from 'mongoose'; // 操作 mongodb 的第三方库
import config from '../config'; // 抽离的配置文件
console.log(config.mongodb.opt);

const DATABASE_URL = config.mongodb.host; // 数据库URL
const DATABASE_NAME = config.mongodb.database;  // 操作的数据库
const DATABASE_OPT = config.mongodb.opt; // 数据库链接的可选项
const db = mongoose.connect(DATABASE_URL + DATABASE_NAME, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

// 打开数据库
db.once('open', () => {
  console.log('连接数据库成功');
});

// 数据库报错
db.on('error', err => {
  console.log('Error in MongoDB connection: ', err);
  mongoose.disconnect();
});

// 关闭数据库
db.on('close', () => {
  console.log('数据库断开， 重连ing');
  // 若是数据库失联则重新链接数据库
  mongoose.connect(DATABASE_URL, DATABASE_OPT);
});
