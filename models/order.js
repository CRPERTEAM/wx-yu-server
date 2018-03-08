import mongoose from 'mongoose'
import OrderSchema from '../schema/order'

export default mongoose.model("Order", OrderSchema)
