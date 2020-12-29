const Contact = require('../models/contact');
const NewsLetter = require('../models/newsletter');
const router = require('express').Router();
const mail = require('../services/mail');

router.post('/contact', async (req, res) => {
    let { name, email, message } = req.body;
    const newContact = new Contact({
        name:name,
        email:email,
        message:message
    });
    try {
        const save = newContact.save();
        res.send({msg:'Successfully Saved',data:save})
       // mail(); For mail service 
    } catch (error) {
        res.send('Something went wrong !')
    }
});

router.post('/newsLetter',async(req,res)=>{
    let {email} = req.body;
    const newNewsLetter = new NewsLetter({
        email:email
    });
    try {
        let save = newNewsLetter.save();
        res.send({msg:'Successfully Subscribed',data:save})
    } catch (error) {
        
    }
})

module.exports = router;