import React from 'react'
import {  useSelector} from 'react-redux';

export default function Detail() {

    const detailBook = useSelector((state) => state.detail)

   

  return (
    <>
         
         <h3>{detailBook.title}</h3>
         <h4>{detailBook.author}</h4>
         <img src={detailBook.image} alt={detailBook.title}/>
         <span>{detailBook.state}</span>
         <p dangerouslySetInnerHTML={{ __html: detailBook.content}}></p>
         <div>
             {detailBook.categories?.map((e, i) => {

                 <span key={i}>{e.name}</span> 
             }
             )}
         </div>
         <span>{detailBook.pages}</span>
         <span>{detailBook.lenguage}</span>
         <span>{detailBook.publisher}</span>
         <span>{detailBook.publisher_date}</span>
    </>
  )
}
