import mongoose from 'mongoose'; // 引入 mongoose
const Schema = mongoose.Schema; // 映射表实例(概要)

const setPrice = val => {
  if (!val) {
    return 0;
  } else {
    return parseInt(parseFloat(val) * 100);
  }
};

const getPrice = val => {
  if (!val) {
    return '0.00';
  }
  return (val / 100).toFixed(2);
};

const GoodsSchema = new Schema({
  typeId: String,
  title: {
    // 标题
    type: String,
    required: true
  },
  desc: String, // 描述
  picture: String, // 图片
  price: {
    // 价格
    type: Number,
    get: getPrice,
    set: setPrice
  },
  salesVolume: Number, // 销售量
  inventory: Number, // 库存
  create_time: Date,
  update_time: Date,
  status: {
    type: Number,
    default: 0 // 0 表示可用， 1 表示未发布， 2 表示删除
  }
});

// 使用getters的时候必须设置true，否则将不生效， 使用setters则没有影响
GoodsSchema.set('toJSON', { getters: true, virtuals: false });

export default mongoose.model('Goods', GoodsSchema);
