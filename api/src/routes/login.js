process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const express = require('express')
const router = express.Router()
require('dotenv').config();
const {User , Op } = require('../db');







router.post('/', async (req, res) => {
    
    let{
        name,
        last_name,
    } = req.body

    try{
       const [ensayo, created] = await User.findOrCreate({ 
           where:{
            
            name:name,
            last_name: last_name,
                    
        },
           default:{},
        });
    console.log(await ensayo, 'En el metodo User, deferencias')
    console.log(created, 'created?'); // true
    res.status(200).send(ensayo);

    }catch(error){
      
      res.status(400).send('error')
    
    }


});

module.exports = router;