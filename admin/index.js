const router = require('express').Router();


router.get('/',(req,res)=>{
    res.send('Admin Page')
})


module.exports = router;