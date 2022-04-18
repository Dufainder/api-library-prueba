process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Book, Category, User, Op } = require('../db');


const validacionBook = async(id, user)=>{
   
    try{
        const dataBookDB =  await Book.findAll({ 
            where:{
                id:id,
            },
            include:{ 
                
                  model:User
                },

        })
        

        console.log()
        return await dataBookDB;

     }catch (error) {
        console.error(error, "error");
     }
  };


  const updataBook = async(id,userid)=>{
   
    try{
        const dataBookDB =  await Book.update({
           
            available:false,
            userId: userid,
             
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


  const validateUser = async(id)=>{
   
    try{
        const dataUserDB =  await User.findAll({ 
            where:{
                id:id,
            },
            include:{
                model:Book
            },
        })
        
        return await dataUserDB;

     }catch (error) {
        console.error(error, "error");
     }
  };




router.put('/:iduser/:id', async (req, res) => {
      
    const { id } = req.params;
    const { iduser } = req.params;

    try{
        
        const userDB = await validateUser(iduser);
        let upUser = await userDB; 
        
        const BooksDB = await validacionBook(id);
        const upBooksDB = await updataBook(id,iduser);
        let upBook = await upBooksDB; 

        console.log(iduser, 'el id del usuario')

        if((upBook.length !== 0) & (upUser.length !== 0)){
            let elBook = await BooksDB; 
            console.log(upUser, '<el usuario que debo vincular')
        
            await res.send(elBook)
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