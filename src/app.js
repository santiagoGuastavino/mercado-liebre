const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')

const pathPublic = path.resolve('public')
app.use(express.static(pathPublic))

app.set('view engine', 'ejs')
const viewsPath = path.resolve('./src/views')
app.set('views', viewsPath)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(methodOverride('_method'))

const mainRouter = require('./routes/main')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')

app.use('/', mainRouter)
app.use('/', userRouter)
app.use('/products', productRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running @ ${PORT}`))
