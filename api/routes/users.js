const router = require("express").Router();

router.get('/',(req,res)=>{
    res.send("You have reached the home page of user")
})

module.exports=router