import React, {useEffect} from 'react';
import { getBooksAll} from '../actions/index';
import { useDispatch, useSelector} from 'react-redux';
import Navbar from '../navbar/indexNavbar';
import Card from './card/indexCards';
import { ContainerCards } from './styledHome';


function Home() {

  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.books)

    useEffect(() => {
        dispatch(getBooksAll())
        if(allBooks.data !== undefined){
          console.log(allBooks, 'a ver');
        }
      },[])  

   

  return (
    <>
      <Navbar/>

    <ContainerCards>
     
     {allBooks? allBooks.map((e,i)=>(
       i<5?
       <Card 
     
         key={e.id}
         id={e.id}
         title={e.title} 
         author={e.author} 
         content_short={e.content_short}
         publisher_date={e.publisher_date}
         imagen={e.image}
         id_api={e.id_api}
         state={e.state}
      >
            
            
            </Card>
            :<></>
            ))
            
            : <></>} 
   
      </ContainerCards>
    
    </>
  )
}

export default Home