import mongoose from "mongoose"; // 操作 mongodb 的一个关联库
const Schema = mongoose.Schema; // 映射表实例(概要)

const GoodsTypeSchema = new Schema({
  label: String, // 商品标签
  value: {
    type: String,
    required: true
  },
  create_time: Date, // 创建时间
  update_time: Date, // 更新时间
  status: {
    type: Number,
    default: 0 // 0 表示可用， 1 表示未发布， 2 表示删除
  }
});

export default mongoose.model("GoodsType", GoodsTypeSchema);
