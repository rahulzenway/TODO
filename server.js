const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var config = require('./config/config.json')
app.set('secret',config.secret)

const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true },(err,data)=>{
    if(err){
        console.log("Database not connected")
    }
    else {console.log("Database connected")}
})

var routes = require('./routes/routes')
app.use('/api',routes)

app.listen(1500,()=>{ console.log(`port ....`)})