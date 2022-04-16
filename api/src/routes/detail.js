process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Book, Category, Op } = require('../db');



const validacionBook = async(id)=>{
   
    try{
        console.log(id, 'que es id??')
        const BooksDB = await Book.findByPk(id,{
           
           
            include: {
            model: Category,
            atributes: ["name"],
            through: {
                attributes: [],
                },
            },
        });
        if(BooksDB){
        const obj = {
            id: BooksDB.id,
            title: BooksDB.title,
            content: BooksDB.content,
            author: BooksDB.author,
            publisher: BooksDB.publisher,
            image: BooksDB.image,
            pages: BooksDB.pages,
            language:BooksDB.language,
            publisher_date:BooksDB.publisher_date,
            categories: BooksDB.categories?.map(e => e.name)
        }
            console.log(obj,'el detalle del objeto')
            return obj
        }else{
            const objerr = {
                title: 'Book not Found',
                content: 'None',
               
            }
            return objerr
        }
    
        
    }catch (error) {
        console.error(error, "error");
     }
    };



router.get('/:id', async (req, res) => {
  
    const { id } = req.params;
    
    try{
        
        
        const BooksDB = await validacionBook(id);
        let elBook = await BooksDB; 
        res.send(elBook)
        
        
        
    }catch(e){
        let objerr
    
        objerr = {
        title: 'Error al intentar encontrar el libro', 
        image: 'https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg',  
    }
    
    res.send(objerr)
    }
    })
        
        
        // }else{
            
        //     const resAxios = await axios.get(`${spoonacularURL}/recipes/${id}/information?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);
        //     const {result} = resAxios.data;
        //     let obj = {};

        //     obj = {
        //         name: result.title, 
        //         vegetarian: result.vegetarian,
        //         vegan: result.vegan,
        //         glutenFree: result.glutenFree,
        //         dairyFree: result.dairyFree,
        //         image: result.image, 
        //         idApi: result.id, 
        //         score: result.spoonacularScore, 
        //         healthScore: result.healthScore, 
        //         diets: result.diets?.map(element => element),types: result.dishTypes?.map(element => element), 
        //         summary:result.summary, 
        //         steps: result.instructions
        //        }
            
        //     if (obj){
        //         res.json(obj);
        //     }else{

        //         let objerrors

        //         objerrors = {
        //             name: 'Recipe not Found', 
        //             image: 'https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg',  
        //             score: 0, 
        //             healthScore: 0, 
        //             diets: [], 
        //             summary:'none', 
        //             steps: 'none'}

        //         res.json(objerrors)
        //     }
        // }


module.exports = router