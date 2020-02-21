const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log('\x1b[44m%s\x1b[0m', ` BACKEND RODANDO NA PORTA: ${port} `);  //cyan
})

module.exports = server