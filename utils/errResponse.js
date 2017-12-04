// 错误的成功回调
export const ERR_SUCCESS = (msg) => {
  return {
    errcode: 0,
    errmsg: msg
  }
}


// 错误的失败回调
export const ERR_FAILED = (msg) => {
  return {
    errcode: 1,
    errmsg: msg
  }
}

// 通用错误,参数未找到
// Common Err Start from 1001
export const ERR_PARAMS_NOT_EXIST = {
  errcode: 1001,
  errmsg: '参数不存在'
}
