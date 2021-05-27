var dbLogin = require('../models/login')

exports.register= (req,res)=>{
    if(!req.body.email||!req.body.password)
    {
        res.json({
            success:false,
            msg: "pls send all data"
        })
    }else{
        dbLogin.findOne({email: req.body.email} ,(err,data)=>
        {
            if(err)
            {
                res.json
                ({
                success: false,
                msg: "pls try agian after sometime"
                })
        }else if(!data||data==null)
        {
            new dbLogin({
                email: req.body.email,
                password: req.body.password
            }).save((err,data)=>
            {
                if(err)
                {
                    res.json({
                    success: false,
                    msg: "pls try after sometime"
                   })
                }else{
                    res.json({
                        suceess:true,
                        msg: "you have successfully registered"
                    })
                }
            })

            }else{
            res.json({
                success: false,
                msg: "you have already registered."
            })
        }
        })
    }
}