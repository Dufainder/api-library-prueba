const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Book, Category, Op } = require('../db');
const {LibrosURL} = process.env;

//!                   1


//!                   2

const getDBInfo = async () => {
        try{
            const dataDB =  await Book.findAll({ 
                include:{
                    model: Category,
                    attributes: ['name'],
                    through:{
                        attributes: []
                    }
                }
            })
            let response = await dataDB;
            console.log(response, "Lo que devuelve BD")
            if(dataDB){
                dataDB.map(book => {
                         return {
                             id: book.id,
                             title: book.title,
                             author: book.author,
                             state: book.state,
                             content_short: book.content_short,
                             publisher_date:book.publisher_date,
                             image: book.image,
                             id_api: book.id_api,
                             categorys: book.categorys?.map(category => category.name),
                         }
                     });

            }

            else{
                 
                const resAxios = await axios.get(`${LibrosURL}`);
                console.log(results, "resAxios")
                const { results } = resAxios.data ;
                console.log(results, "funcion getApiInfo")
                return response;
            }
            
        }catch (error) {
          console.error(error);
        }
    }

//!                   3

router.get('/', async (req, res) => {
    
    const { name } = req.query

    if (name) {
  
        // const infoByName = await getInfoByName(name);
        // if (infoByName !== 'error'){
        //     console.log("Se encontro coincidencia con name")
        //     infoByName.length > 0 ? res.json(infoByName) : res.status(400).json([{ name: 'not found any recipes'}]);
        // }else{
        //     console.log("Error")
        //     res.status(404).json([{ name: 'Error'}])
        // }

    }else{
       // para no confundir a home, si no hay un name de busqueda muestra toda la info.
        const allDate = await getDBInfo() 
        if (allDate !== 'error'){  
            res.json(allDate);
        }else{
            res.status(404).json({message:'Error en la búsqueda de datos'})
        }

    }
});
