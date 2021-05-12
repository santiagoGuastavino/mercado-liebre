let express = require('express');
let app = express();
let mainRouter = require('./routes/main');
let userRouter = require('./routes/user');
let path = require('path');

let pathPublic = path.resolve('public');
app.use(express.static(pathPublic));

app.set('view engine','ejs');
let viewsPath = path.resolve('./src/views')
app.set('views', viewsPath)

app.use('/', mainRouter);
app.use('/user', userRouter);

// Heroku
app.listen(process.env.PORT || 3001, () => console.log('Server running: 3001'));