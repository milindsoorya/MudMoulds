import dbConnect from '../../../utils/dbConnect';
import NewsLetter from '../../../models/newsletter';

dbConnect();

export default async(req,res)=>{
    let {email} = req.body;
    let options = {
        email : email
    };
    let newNewsLetter = new NewsLetter(options);
    try {   
        let data = await newNewsLetter.save();
        res.status(201).send('Successfully registered for news letter');
    } catch (error) {
        res.send(error)
    }

}