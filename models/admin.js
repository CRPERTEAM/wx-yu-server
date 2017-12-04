import mongoose from "mongoose"; // 操作 mongodb 的一个关联库
const Schema = mongoose.Schema; // 映射表实例(概要)

const AdminSchema = new Schema({
  username: String,
  password: String,
  level: {
    type: Number,
    default: 1 // 1 为管理员
  },
  label: String,
  create_time: Date,
  update_time: Date
});

export default mongoose.model("Admin", AdminSchema);
