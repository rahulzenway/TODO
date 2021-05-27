var dbtodo = require('../models/todoSchema')

exports.destroy = (req,res)=>{
    if(!req.body.content)
    {
        res.json({
            success: false,
            msg: "pls select content"
        })
    }else{
        dbtodo.findOneAndUpdate({_id:req.decoded.id},{$set:{status: -1}},(err,data)=>{
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