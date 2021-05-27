var jwt = require('jsonwebtoken')

var tokenVerify = (req,res,next)=>{
var token=req.headers.token;
if(!token){
    res.json({
        success: false,
        msg: "auth user"
    })
}else{
    jwt.verify(token, req.app.get('secret'),(err,decoded)=>
    {
        if(err)
        {
            res.json({
                token:token,
                success: false,
                msg: "auth. user"
            })
        }
        else{
            req.decoded= decoded;
            next();
        }
    })
}
}

module.exports = tokenVerify;