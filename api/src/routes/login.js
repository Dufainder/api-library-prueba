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
        await User.create({ 
            name,
            last_name,
        });

    res.send('Succesfull');

    }catch(error){
      
      res.status(400).send(error)
    
    }


});