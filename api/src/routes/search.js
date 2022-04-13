process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Book, Category, Op } = require('../db');



const getDBInfo = async () => {
    try{
        const dataBookDB =  await Book.findAll({ 
            include:{
                model: Category,
                attributes: ['name'],
                through:{
                    attributes: []
                }
            }
        })

        return dataBookDB

    }catch (error) {
        console.error(error, "error");
      }

 }


 router.get('/', async (req, res) => {
           
   const dataBook = await getDBInfo();
      
      if(dataBook){
        res.json(dataBook);
      }

      else{
        res.status(404).json({message:'Error en la búsqueda de datos'})
      }
 })

 module.exports = router
