const express = require('express');
let path = require('path');

const app = express()

app.use(express.static('dist'));


app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

 const server = app.listen(8000, () => {
    console.log('server running on 8000')
});
