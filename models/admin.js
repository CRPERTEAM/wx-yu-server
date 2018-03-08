import mongoose from 'mongoose'; // 操作 mongodb 的一个关联库
import AdminSchema from '../schema/admin'

export default mongoose.model("Admin", AdminSchema)
