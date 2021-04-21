const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

const pathHome = path.resolve('./views/home.html');
app.get('/', (req,res) => res.sendFile(pathHome));

app.listen(3000, () => console.log('Server running'));