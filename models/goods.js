import mongoose from 'mongoose' // 引入 mongoose
import GoodsSchema from '../schema/goods'

export default mongoose.model('Goods', GoodsSchema)
