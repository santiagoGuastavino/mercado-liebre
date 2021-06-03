let express = require('express');
let app = express();
let path = require('path');
let methodOverride = require('method-override');

let pathPublic = path.resolve('public');
app.use(express.static(pathPublic));

app.set('view engine','ejs');
let viewsPath = path.resolve('./src/views')
app.set('views', viewsPath)

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride('_method'));

let mainRouter = require('./routes/main');
let userRouter = require('./routes/user');
let productRouter = require('./routes/product');

app.use('/', mainRouter);
app.use('/', userRouter);
app.use('/products', productRouter);

app.listen(process.env.PORT || 3001, () => console.log('Server running: 3001'));