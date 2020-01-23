const express = require('express');
const server = express();

server.use(express.json());


server.get('/', (req,res) => {
    res.status(200).json('<h2>Server is up</h2>')
})






module.exports = server;