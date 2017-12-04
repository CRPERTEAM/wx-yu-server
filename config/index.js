import path from "path"; // 内置路径解析模块
let env = process.env.NODE_ENV || "development"; // 环境变量
env = env.toLocaleLowerCase(); // 转为小写

let validEnv = ['development', 'production']
if (validEnv.indexOf(env) < 0 ) {
  let err = new Error('环境变量有误, 环境变量只能为development 或 production')
  throw err
}

let file = path.resolve(__dirname, env); //获取环境变量,在当前目录下解析为绝对路径

module.exports = require(file);
