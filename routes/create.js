var dbtodo = require('../models/todoSchema')

exports.create = (req,res)=>{
    if(!req.body.content)
    {
        res.json({
            success: false,
            msg: "Pls enter data"
        })
    }
    else {
        var newtodo = new dbtodo({
            content: req.body.content,
            status: 0,
            createdBy: req.decoded._id
        })
        .save((err,data)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "something went wrong."
                })
            }
            else{
                res.json({
                    success: true,
                    msg: "data saved",
                    data: data
                })
            }
        })
    }
}