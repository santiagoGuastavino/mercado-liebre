const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

const pathPublic = path.resolve('public');
app.use(express.static(pathPublic));

app.use('/', mainRouter);
app.use('/user', userRouter);

// Heroku
app.listen(process.env.PORT || 3001, () => console.log('Server running: 3001'));