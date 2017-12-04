import mongoose from "mongoose"; // 操作 mongodb 的一个关联库
const Schema = mongoose.Schema; // 映射表实例(概要)

const UserSchema = new Schema({});

export default mongoose.model("User", UserSchema);
