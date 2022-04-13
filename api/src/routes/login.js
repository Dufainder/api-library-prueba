process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const express = require('express')
const router = express.Router()
require('dotenv').config();
const {User, Admin , Op } = require('../db');


const validarAdmin = async(id) =>{

    try{
                
        const dataAdminDB =  await Admin.findAll({
            where:{
                identification:id,
            }
        });
        return dataAdminDB;

    }catch(error){
              
       console.log(error, "error")
    }
 } 






router.post('/', async (req, res) => {
    
    let{
        name,
        last_name,
        identification,
    } = req.body

    try{

       const admin = await validarAdmin(identification); 
       console.log(await admin, 'que es admin?')
       if(admin.length === 0){

           const [ensayo, created] = await User.findOrCreate({ 
               
               
               where:{
                   identification:identification,
                   
                },
                defaults:{
                    name:name,
                    last_name:last_name,
                    admin:false,
                },
            });
            // console.log(await ensayo, 'En el metodo User, in if deferencias')
            // console.log(created, 'created in if?'); // true
            res.status(200).send(ensayo);
        }

        else{
               
            const [ensayo, created] = await User.findOrCreate({ 
                  
                where:{
                    identification:identification,
                    
                 },
                 defaults:{
                     name:name,
                     last_name:last_name,
                     admin:true,
                 },
             });
            //  console.log(await ensayo, 'En el metodo User, else deferencias')
            //  console.log(created, 'created en esle?'); // true
             res.status(200).send(ensayo);
         }

        
            
    }catch(error){
      
      res.status(400).send('error')
    
    }


});

module.exports = router;