var dbAllData = require('../models/todoSchema')

exports.allData = (req,res) =>{
    dbAllData.find({status:{$ne: -1},createdBy: req.decoded._id},(err,data)=>{
        if(err)
        {
            res.json({
                success: false,
                msg: "Erroe"
            })
        } else {
            res.json({
                success: true,
                msg: "All Data",
                data : data
            })
        }
    })
}