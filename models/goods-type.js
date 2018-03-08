import mongoose from 'mongoose' // 操作 mongodb 的一个关联库
import GoodsTypeSchema from '../schema/goods-type'

export default mongoose.model("GoodsType", GoodsTypeSchema)
