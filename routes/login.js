var dbLogin = require('../models/login')
var jwt = require('jsonwebtoken')

exports.login = (req,res)=>{
    if(!req.body.email||!req.body.password)
    {
        res.json({
            success: false,
            msg: "pls enter all details"
        })
    }else{
        dbLogin.findOne({email:req.body.email},(err,data)=>{
            if(err)
            {
                res.json({
                    success: false,
                    msg: "pls try again"
                })
            }else if(!data||data==null)
            {
                res.json({
                    success:false,
                    msg: "pls reqister first"
                })
            }else if(data.password!=req.body.password)
            {
                res.json({
                    success: false,
                    msg: "incorrect password"
                })
            } 
            else{
                var tokenData = {
                    _id: data._id,   
                }
                var token = jwt.sign(tokenData, req.app.get('secret'))
                res.json({
                    success: true,
                    msg: "Successfully login.",
                    token: token
                })
            }
        })
    }
}