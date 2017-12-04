import crypto from 'crypto';

export const baseResponse = (res, err = {}, data = {}) => {
  return res.json({
    errcode: err.errcode,
    errmsg: err.errmsg,
    data: data
  });
}

export const retJsonData = (err = {}, data = {}) => {
  return {
    errcode: err.errcode,
    errmsg: err.errmsg,
    data: data
  };
}

// 判断一个对象是否为空对象
export const isEmptyObject = (obj) => {
  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

// 密码进行MD5加密
export const passwordEncrypt = (password) => {
  const md5 = crypto.createHash('md5')
  let salt = 'Thisispassword'
  md5.update(password)
  md5.update(salt)
  return md5.digest('hex'); //返回 md5加密后的十六进制字符串
}
