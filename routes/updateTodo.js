var dbupdate = require('../models/todoSchema')

exports.updateTodo = (req,res) =>{
    if(!req.body._id||!req.body.content)
    {
        res.json({
            success: false,
            msg: "pls send details"
        })
    }else{
        // how to check content /
        
        dbupdate.findOneAndUpdate({_id:req.body._id},{$set:{content: req.body.content}},(err,data)=>{
            if(err)
            {
                res.json({
                    success: false,
                    msg: "something went wrong"
                })
            }else{
                res.json({
                    success: true,
                    msg:" dataupdate"
                })
            }
        })
    }


}