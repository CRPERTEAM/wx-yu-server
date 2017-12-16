import Base from './base'
import GoodsModel from '../models/goods'
import GoodsTypeModel from '../models/goods-type'

class Goods extends Base {
  constructor () {
    super()
  }

  // 获取商品列表
  async getGoodsList (req, res, next) {
    try {
      let jsonData = await super.getList(GoodsModel, req.query)
      let goodsList = jsonData.data
      for (let i = 0; i < goodsList.length; ++i) {
        let goods = Object.assign({}, goodsList[i])._doc
        console.log('goods: ', goods)
        if ('typeIds' in goods) {
          let goodsLabels = []
          for (let j = 0; j < goods.typeIds.length; ++j) {
            let typeId = goods.typeIds[j]
            let params = { id: typeId }
            let goodsType = await super.getOne(GoodsTypeModel, params)
            goodsLabels.push(goodsType.data.label)
            console.log('goodsLabels: ', goodsLabels)
          }
          goods.typeLabels = goodsLabels
          console.log('goods: ', goods)
          goodsList[i] = goods
          console.log('goodsList[i]: ', goodsList[i])
        }
      }
      console.log('goodsList: ', goodsList)
      jsonData.data = goodsList
      return res.json(jsonData)
    } catch (err) {
      throw err
    }
  }

  // 获取商品
  async getGoods (req, res, next) {
    // base类封装的已经包含的了errcode & errmsg，方便了错误处理，但是关联查询的时候会带来一定的繁琐，这个地方需要稍微考量一下
    try {
      let jsonData = await super.getOne(GoodsModel, req.params)
      let goods = Object.assign({}, jsonData.data)._doc
      // 可能不会有typeId
      if ('typeIds' in goods) {
        let goodsLabels = []
        for (let i = 0; i < goods.typeIds.length; ++i) {
          let typeId = goods.typeIds[i]
          let params = { id: typeId }
          let goodsType = await super.getOne(GoodsTypeModel, params)
          goodsLabels.push(goodsType.data.label)
        }
        jsonData.data.typeLabels = goodsLabels
      }
      return res.json(jsonData)
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
