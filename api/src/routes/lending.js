process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Book, Category, User, Op } = require('../db');


const validacionBook = async(id)=>{
   
    try{
        const dataBookDB =  await Book.findAll({ 
            where:{
                id:id,
            }
        })
        
        return await dataBookDB;

     }catch (error) {
        console.error(error, "error");
     }
  };


  const updataBook = async(id)=>{
   
    try{
        const dataBookDB =  await Book.update({
           
            available:false,
             
         },
            
        {
            where:{
                id:id,
            }
        })
        
        return await dataBookDB;

     }catch (error) {
        console.error(error, "error");
     }
  };


router.put('/:id', async (req, res) => {
      
    const { id } = req.params;

    try{
        
        
        const upBooksDB = await updataBook(id);
        let upBook = await upBooksDB; 

        if(upBook.length !== 0){
            const BooksDB = await validacionBook(id);
            let elBook = await BooksDB; 
            res.send(elBook)
         }
         else{
            res.send('Error al intentar actualizar el libro, pudede que el id este incorrecto') 
         }

      
          
        
    }catch(e){
        let objerr
    
        objerr = {
        title: 'Error no se pudo actualizar el estado del libro, quizar problema de conexion.', 
        image: 'https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg',  
    }
    
    res.send(objerr)
    }

});

module.exports = router