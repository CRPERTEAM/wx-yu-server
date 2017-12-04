import {
  ERR_SUCCESS,
  ERR_FAILED,
  ERR_PARAMS_NOT_EXIST
} from "../utils/errResponse"; // 错误的回调封装

// 接口的基类
class Base {
  constructor() {}

  r(res, err = {}, data = {}) {
    return res.json({
      errcode: err.errcode,
      errmsg: err.errmsg,
      data: data
    });
  }

  jsonData(err = {}, data = {}) {
    return {
      errcode: err.errcode,
      errmsg: err.errmsg,
      data: data
    };
  }

  // 判断一个对象是否为空对象
  isEmptyObject(obj) {
    for (const key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  }
  // 获取一条记录
  async getOne(model, params) {
    // 若是参数不存在或者参数为空则返回对应的错误回调
    if (!params || this.isEmptyObject(params)) {
      return this.jsonData(ERR_PARAMS_NOT_EXIST);
    }
    let id = params.id;
    try {
      let one = await model.findOne({ _id: id });
      if (one) {
        return this.jsonData(ERR_SUCCESS(`${model.modelName} 获取成功`), one);
      } else {
        return this.jsonData(ERR_FAILED("不存在该类型"));
      }
    } catch (err) {
      return this.jsonData(ERR_FAILED(err.message));
    }
  }

  async getList(model, params) {
    const lastId = params.lastId || 0;
    let findParams = {};
    let limit = params.limit || 10;

    if (lastId) {
      findParams = {
        _id: { $lt: lastId }
      };
    }

    try {
      // status为0时，找出大于lastId的limit个项，并以_id倒序输出
      let list = await model
        .where({ status: 0 })
        .find(findParams)
        .limit(limit)
        .sort({ _id: -1 });
      if (list) {
        return this.jsonData(
          ERR_SUCCESS(`${model.modelName} 列表获取成功`),
          list
        );
      } else {
        return this.jsonData(ERR_FAILED("不存在该类型"));
      }
    } catch (err) {
      return this.jsonData(ERR_FAILED(err.message));
    }
  }

  async addOne(model, params, matchParams = {}) {
    // 若是参数不存在或者参数为空则返回对应的错误回调
    if (!params || this.isEmptyObject(params)) {
      return this.jsonData(ERR_PARAMS_NOT_EXIST);
    }

    try {
      if (!this.isEmptyObject(matchParams)) {
        let exist = await model.findOne(matchParams);
        if (exist) {
          return this.jsonData(ERR_FAILED(`${model.modelName} 已经存在`));
        }
      }
      params["create_time"] = new Date();
      params["update_time"] = new Date();
      let one = await model.create(params);
      if (one) {
        return this.jsonData(ERR_SUCCESS(`${model.modelName} 添加成功`), one);
      } else {
        return this.jsonData(ERR_FAILED(`${model.modelName} 添加失败`));
      }
    } catch (err) {
      return this.jsonData(ERR_FAILED(err.message));
    }
  }

  async deleteOne(model, params) {
    if (!params || this.isEmptyObject(params)) {
      return this.jsonData(ERR_PARAMS_NOT_EXIST);
    }

    let id = params.id;
    try {
      // 判断id是否存在且status为0，则表示可用删除该对象
      let exist = await model.where({ status: 0 }).findOne({ _id: id });
      if (!exist) {
        return this.jsonData(ERR_FAILED(`${model.modelName} 删除对象未找到`));
      }
      let one = await model.where({ _id: id }).update({ status: 1 });
      if (one) {
        return this.jsonData(ERR_SUCCESS(`${model.modelName} 删除成功`), one);
      } else {
        return this.jsonData(ERR_FAILED(`${model.modelName} 删除失败`));
      }
    } catch (err) {
      return this.jsonData(ERR_FAILED(err.message));
    }
  }
  // 更新一条记录
  async updateOne(model, params) {
    // 若是参数不存在或者参数为空则返回对应的错误回调
    if (!params || this.isEmptyObject(params)) {
      return this.jsonData(ERR_PARAMS_NOT_EXIST);
    }

    let id = params.id;
    try {
      let exist = await model.findOne({ _id: id });
      if (!exist) {
        return this.jsonData(ERR_FAILED(`${model.modelName} 更新对象未找到`));
      }
      let one = await model.where({ _id: id }).update(params);
      if (one) {
        return this.jsonData(ERR_SUCCESS(`${model.modelName} 更新成功`), one);
      } else {
        return this.jsonData(ERR_FAILED(`${model.modelName} 更新失败`));
      }
    } catch (err) {
      return this.jsonData(ERR_FAILED(err.message));
    }
  }
}

export default Base;
