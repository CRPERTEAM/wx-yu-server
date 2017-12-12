import Base from './base'
import GoodsModel from '../models/goods'
import GoodsTypeModel from '../models/goods-type'

class Goods extends Base {
  constructor () {
    super()
  }

  // 获取商品列表
  async getGoodsList (req, res, next) {
    console.log('getGoodsList')
    try {
      let jsonData = await super.getList(GoodsModel, req.query)
      let goodsList = jsonData.data
      for (let i = 0; i < goodsList.length; ++i) {
        let goods = goodsList[i]
        if ('typeId' in goods) {
          let params = { id: goods.typeId }
          let goodsType = await super.getOne(GoodsTypeModel, params)
          let goodsLabel = goodsType.data.label
          jsonData.data[i].typeLabel = goodsLabel
        }
      }
      return res.json(jsonData)
    } catch (err) {
      throw err
    }
  }

  // 获取商品
  async getGoods (req, res, next) {
    // base类封装的已经包含的了errcode & errmsg，方便了错误处理，但是关联查询的时候会带来一定的繁琐，这个地方需要稍微考量一下
    try {
      let goods = await super.getOne(GoodsModel, req.params)
      // 可能不会有typeId
      if ('typeId' in goods.data) {
        let params = { id: goods.data.typeId }
        let goodsType = await super.getOne(GoodsTypeModel, params)
        let goodsLabel = goodsType.data.label
        goods.data['typeLabel'] = goodsLabel
      }
      return res.json(goods)
    } catch (err) {
      throw err
    }
  }

  // 添加商品
  async addGoods (req, res, next) {
    let jsonData = await super.addOne(GoodsModel, req.body)
    return res.json(jsonData)
  }

  // 删除商品
  async deleteGoods (req, res, next) {
    let jsonData = await super.deleteOne(GoodsModel, req.params)
    return res.json(jsonData)
  }

  // 更新商品
  async updateGoods (req, res, net) {
    let jsonData = await super.updateOne(GoodsModel, req.body)
    return res.json(jsonData)
  }
}

export default new Goods()
