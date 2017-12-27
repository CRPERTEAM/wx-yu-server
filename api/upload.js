import express from 'express'

import Upload from '../controllers/upload'

const router = express.Router()
router.post('/profile', Upload.uploadProfile)

export default router