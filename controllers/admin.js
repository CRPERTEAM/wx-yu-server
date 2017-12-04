import Base from './base';
// import jwt from 'express-jwt'
import AdminModel from '../models/admin';
import crypto from 'crypto';
import {
  ERR_SUCCESS,
  ERR_FAILED,
  ERR_PARAMS_NOT_EXIST
} from '../utils/errResponse'; // 错误的回调封装
// import { } from 'mongoose';

class Admin extends Base {
  constructor () {
    super();
  }
  /**
   * 登陆接口
   * 1. 用账号密码登陆的情况下，先判断账号密码的正确与否，然后通过jwt生成token
   * 2. 用token登陆，验证token
   */
  async login (req, res, next) {
    let params = req.body || {}

    let token = params.token
    // 如果token存在 则校验token并使用token进行登录
    if (token) {
      if (checkToken(token)) {
      } else {

      }
    }

    let username = params.username
    let password = params.password
    console.log('username: ', username, 'password: ', password)

    if (!username || !password) {
      return this.baseResponse(res, ERR_PARAMS_NOT_EXIST)
    }

    try {
      const admin = await AdminModel.findOne({username})
      console.log('admin: ', admin)
      if (!admin) {
        return this.baseResponse(res, ERR_FAILED('用户名不存在'))
      }
      let passwordMd5 = this.passwordEncrypt(password)
      console.log(`passwordMd5: ${passwordMd5}, password: ${admin.password}`)
      if (passwordMd5 === admin.password) {
        return this.baseResponse(res, ERR_SUCCESS('登陆成功'))
      } else {
        return this.baseResponse(res, ERR_FAILED('登录失败，账号或密码错误'))
      }
    } catch (err) {
      console.log('我应该捕获到异常了吧', err)
      return this.baseResponse(res, ERR_FAILED(err.message))
    }
  }

  async logout (req, res, next) {
    console.log(this.baseResponse())
    return res.json(this.baseResponse())
  }

  /**
   * 注册接口
   */
  async register (req, res, next) {
    let params = req.body || {}

    let username = params.username;
    let password = params.password;

    if (!username || !password) { // 若是用户名或者密码为空则直接返回错误
      return this.baseResponse(res, ERR_PARAMS_NOT_EXIST);
    }

    try {
      const admin = await AdminModel.findOne({username})  // 查找数据库中的用户名
      if (admin) { // 如果存在则返回该用户存在且提示
        return this.baseResponse(res, ERR_FAILED('该用户已经存在'))
      } else { // 否则,则对密码加密并且把相关信息写入用户表
        const passwordMd5 = this.passwordEncrypt(password)
        const newAdmin = {
          username,  // 用户名帐号
          password: passwordMd5, // 用户名密码
          create_time: new Date(), // 创建时间
          update_time: new Date() // 更新时间
        }
        await AdminModel.create(newAdmin); // 接口回调成功则正常返回
        return this.baseResponse(res, ERR_SUCCESS('注册成功'))
      }
    } catch (err) { // 反之则失败
      return this.baseResponse(res, ERR_FAILED('注册失败'))
    }
  }


  async getAdminList (req, res, next) {
    let jsonData = await this.getList(AdminModel, req.query)
    return res.json(jsonData)
  }

  // 验证 token
  checkToken (token) {
    return true
  }

  // 密码进行MD5加密
  passwordEncrypt (password) {
    const md5 = crypto.createHash('md5')
    let salt = 'Thisispassword'
    md5.update(password)
    md5.update(salt)
    return md5.digest('hex'); //返回 md5加密后的十六进制字符串
  }
}

export default new Admin()
