import multer from 'multer'

const fileFilter = (req, file, cb) => {
  console.log('fileFilter: ', file)
  const whiteList = [
    'image/jpeg',
    'image/gif',
    'image/x-png',
    'image/pjpeg',
    'image/bmp'
  ]

  if (whiteList.indexOf(file.mimetype) > -1) {
    cb(null, true)
  } else {
    cb(new Error('上传类型有误'), false)
  }
}

const _upload = multer({
  dest: 'uploads/',
  fileFilter: fileFilter,
  preservePath: true,
  limits: {
    fileSize: 2 * 1024 * 1024 // limits 2M
  }
}).single('avatar')

class Upload {
  uploadProfile = (req, res, next) => {
    _upload (req, res, err => {
      if (err) {
        return res.json({
          errcode: -1,
          errmsg: err.message
        })
      }

      if (!req.file) {
        return res.json({
          errcode: -1,
          errmsg: '上传失败， 上传文件不存在'
        })
      }

      return res.json({
        errcode: 0,
        errmsg: '上传成功',
        data: req.file
      })
    })
  }
}

export default new Upload()
