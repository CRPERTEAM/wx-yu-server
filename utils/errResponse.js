export const ERR_SUCCESS = (msg) => {
  return {
    errcode: 0,
    errmsg: msg
  }
}

export const ERR_FAILED = (msg) => {
  return {
    errcode: 1,
    errmsg: msg
  }
}

// Common Err Start from 1001
export const ERR_PARAMS_NOT_EXIST = {
  errcode: 1001,
  errmsg: '参数不存在'
}
