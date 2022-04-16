process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Book, Category, Admin, Op } = require('../db');
const {LibrosURL,CategoriesURL, otherCategoriesURL} = process.env;






const loadAdmin = async () => {

    try{
     
     const admins = [
      { 
          name:"Dufainder",
          last_name:"Bedoya",
          identification:1216718134,
          
      } ,{

          name:"Camilo",
          last_name:"Montoya",
          identification:123456789,

     }]

     admins.map(async (admin) =>{

         let AdminCreate = await Admin.create({ 
             
             name: admin.name,
             last_name: admin.last_name,
             identification: admin.identification,

            })

            await AdminCreate.save();
        });

    }catch(error){
        console.log(error)
    }
}

const ValidarAdmin = async () =>{

    try{
                
        const dataAdminDB =  await Admin.findAll();
        return dataAdminDB;

    }catch(error){
              
       console.log(error, "error")
    }
} 



const validacionCategory = async()=>{
   
    try{
                
     const dataCategoryDB =  await Category.findAll();
     let responseCategory = await dataCategoryDB;
     
       return responseCategory;

    }catch (error) {
        console.error(error, "error");
    }
};



const validacionBook = async()=>{
   
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
        
        return await dataBookDB;

     }catch (error) {
        console.error(error, "error");
     }
  };

  const otherCategories = async (id) => {
          
    const categories = await axios.get(`${otherCategoriesURL}=${id}`);
    categories.data?.map(
        async(cate)=>{
         
        const createProcessCategories = await Category.create(
               { 
                name:cate.name,  
               }
        );  
            
       await createProcessCategories.save();
     
    
    });
      
      
  }

const loadCategoryInDB = async ()=>{
          
    const resCategories = await axios.get(`${CategoriesURL}`);
    const  resultsCategories  = resCategories.data;

    resultsCategories.map(
        async(cate)=>{
        otherCategories(cate.category_id);             
        const createProcessCategories = await Category.create(
               { 
                name:cate.name,  
               }
        );  
            
       await createProcessCategories.save();
       return resultsCategories
      
    });


 };

const loadBookInDB = async () => {
         
    const resAxios = await axios.get(`${LibrosURL}`);
    const  results  = resAxios.data;
    
    
    results.map(async (book)=>{
           
             
             let bookCreate = await Book.create({ 
                 title:book.title,
                 author:book.author,
                 content:book.content,
                 content_short:book.content_short,
                 publisher:book.publisher,
                 publisher_date:book.publisher_date,
                 pages:book.pages,
                 language:book.language,
                 id_api:parseInt(book.ID),
                 image:book.cover,
                 state:false,
                 
                })
                
                const arrayCat = book.categories.map((e)=>e.name);
                for(let i=0; i < arrayCat.length; i++){
                    let categoryDB = await Category.findAll({ 
                        where: {name: arrayCat[i]}
                    })
                    
                    if(categoryDB)
                    bookCreate.addCategory(categoryDB);
                }   

               
               
            });
}


const getDBInfo = async () => {
        try{
           
            let a =false;
            let b=false;

            const adminDB = await ValidarAdmin();
            let responseAdmin = await adminDB;

            const bookDB = await validacionBook(); 
            let responseBook = await bookDB 
            
            const dataCategoryDB =  await validacionCategory();
            let responseCategory = await dataCategoryDB;
          
            if(responseAdmin.length === 0){
                loadAdmin();
                
            }
            
            if(responseCategory.length === 0){
                loadCategoryInDB();
                a=true;
            }

            
            if(responseBook.length === 0){
                loadBookInDB();
                b=true;
            }
            
            if((a === true) & (b === true)){
                return true
            }

            else{
                return false;
            }
            
        }catch (error) {
          console.error(error, "error");
        }
    }

    
    
    
router.get('/', async (req, res) => {
        
    
try{

    const validacion = await getDBInfo();
    if(validacion){
        res.status(200).json('Bases de datos cargada y lista para usarse')
    }
    
    else{
        res.status(200).json('Base de Datos lista')
    }    
  }catch (error){
    console.error(error, "error");

  }
});


module.exports = router