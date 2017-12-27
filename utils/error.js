/**
 * 感觉用这种方式处理Error比较合适， 走到错误分支则将一个Error抛出，
 * 并通过next传递到下一个middleware做统一的错误处理
 */
const errorMessages = {
  ERR_OK: { code: 0, msg: 'Success' },
  ERR_FAILED: { code: 1, msg: 'Failed' },
  ERR_PARAMS_NOT_FOUND: { code: 10000, msg: 'params not found.' }
}

const makeError = (errType) => {
  let err = new Error(errorMessages[errType].msg)
  err.code = errorMessages[errType].code
  return err
}

export default makeError
