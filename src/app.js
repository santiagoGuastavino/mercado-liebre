let express = require('express');
let app = express();
let path = require('path');

let mainRouter = require('./routes/main');
let userRouter = require('./routes/user');

let pathPublic = path.resolve('public');
app.use(express.static(pathPublic));

app.set('view engine','ejs');
let viewsPath = path.resolve('./src/views')
app.set('views', viewsPath)

app.use('/', mainRouter);
app.use('/', userRouter);

app.listen(process.env.PORT || 3001, () => console.log('Server running: 3001'));