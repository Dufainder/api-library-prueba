process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const express = require('express')
const router = express.Router()
require('dotenv').config();
const { Book, Category,User, Op } = require('../db');


//!                   1


//!                   2


const validacionBook = async()=>{
   
    try{
        const dataBookDB =  await Book.findAll({ 
            include:{
                model: Category,
                attributes: ['name'],
                through:{
                    attributes: []
                }
            },
            include:{
                model: User,
            },
        })
        
        return await dataBookDB;

     }catch (error) {
        console.error(error, "error");
     }
  };


const getDBInfo = async () => {
        try{
           
            const bookDB = await validacionBook(); 
            let responseBook = await bookDB;
            return responseBook;
            
            
            
        }catch (error) {
          console.error(error, "error");
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
        console.log("Ingreso a Name")

    }else{
       // para no confundir a home, si no hay un name de busqueda muestra toda la info.
        const allDate = await getDBInfo();
        let Books = await allDate;
        
        if (Books.length !== 0){  
           
            res.json(allDate);
            
        }else{
            res.status(404).json({message:'Error en la búsqueda de datos'})
        }

    }
});

module.exports = router










    // if(responseCategory.length === 0){
    //     console.log(responseBook,"entra a if de categorys")
    //     const resCategories = await axios.get(`${CategoriesURL}`);
    //     const  resultsCategories  = resCategories.data;

    //     console.log(resultsCategories, "categorias estana en 0")

    //     resultsCategories.map(
        //         async(cate)=>{             
    //         const createProcessCategories = await Category.create(
    //                { 
    //                 name:cate.name,  
    //                }
    //         );  
                
    //     await createProcessCategories.save();
    //     console.log(cate.name, 'Name categorie')   

       
    // });
    // }

    /////////////////////////////////////////////////////////////////
    // allDate.map((book)=>{

    //     let bookCreate = await Book.create({ 
    //         title:book.title,
    //         author:book.author,
    //         content_short:book.content_short,
    //         publisher_date:book.publisher_date,
    //         id_api:parseInt(book.id_api),
    //         image:book.image,
    //         state:false,
    //     })

    //     let categoryDB = await Diet.findAll({ 
    //         where: {name: categories}
    //     })

    //     // console.log(recipeCreate);
    //     // console.log(dietDB);
        
    //     bookCreate.addCategory(categoryDB);
    // })
    // try{
    //     let bookCreate = await Book.create({ 
    //         name,
    //         summary,
    //         score,
    //         healthScore,
    //         image,
    //         steps,
    //     })
    
    //     let categoryDB = await Diet.findAll({ 
    //         where: {name: categories}
    //     })

    //     // console.log(recipeCreate);
    //     // console.log(dietDB);
    
    //     bookCreate.addCategory(categoryDB);
    //     res.send('Succesfull');

    // }catch(error){
    //     res.status(400).send(error);
    // }