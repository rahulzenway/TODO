var express = require('express')
var app = express.Router()

var tokenV =require('./tokenVerify')

var login = require('./login')
app.post('/login',login.login)

var register = require('./register')
app.post('/register',register.register)

var create = require('./create')
app.post('/create' ,tokenV, create.create)

var destroy = require('./destroy')
app.post('/destroy',tokenV,destroy.destroy)

var allData = require('./allData')
app.get('/allData',tokenV,allData.allData)



var updateTodo = require('./updateTodo')
app.post('/updateTodo',tokenV,updateTodo.updateTodo)

module.exports = app;