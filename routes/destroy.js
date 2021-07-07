var dbtodo = require('../models/todoSchema')

exports.destroy = (req,res)=>{
    if(!req.body.content)
    {
        res.json({
            success: false,
            msg: "pls select content"
        })
    }else{
        dbtodo.findOneAndUpdate({content:req.body.content},{$set:{status:-1}}, {new: true},(err,data)=>{
            if(err)
            {
                res.json({
                    success: false,
                    msg: "content not found"
                })
            }else{
                res.json({
                    success: true,
                    mash: "content deleted successfully"
                })
            }
        })
    }
    
}