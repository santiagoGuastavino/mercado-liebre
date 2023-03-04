const multer = require('multer')
const path = require('path')

const imgProductPath = path.join(__dirname, '/../../public/img/products')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imgProductPath)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage })

module.exports = upload
