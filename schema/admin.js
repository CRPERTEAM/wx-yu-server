import mongoose from "mongoose"; // 操作 mongodb 的一个关联库
const Schema = mongoose.Schema; // 映射表实例(概要)

const AdminSchema = new Schema({
  username: String,  // 用户名
  password: String,  // 密码
  level: { // 用户级别
    type: Number,
    default: 1 // 1 为管理员
  },
  label: String,
  create_time: Date,  // 创建时间
  update_time: Date  //更新时间
})

export default AdminSchema
