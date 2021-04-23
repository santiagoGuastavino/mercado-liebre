const express = require('express');
const app = express();
const path = require('path');

const pathPublic = path.resolve('public');
app.use(express.static('public'));

const pathHome = path.resolve('views/index.html');
app.get('/', (req,res) => res.sendFile(pathHome));

const pathRegister = path.resolve('views/registro.html');
app.get('/registro', (req,res) => res.sendFile(pathRegister));

app.listen(3001, () => console.log('Server running: 3001'));