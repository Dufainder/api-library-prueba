import React from 'react'
import {useSelector} from 'react-redux';
import { ContainerDetail, SubContainer,
      ImgDetail,H2, H4, P,  SpanStatusOn, SpanStatusOff,
      SpanCat, ContainerCat, SpanInfo, SpanDate  } from './styledDetail';

export default function Detail() {

    const detailBook = useSelector((state) => state.detail)

   

  return (
    <>
         
         <ContainerDetail>
          <SubContainer>

           <H2>{detailBook.title}</H2>
           <H4>Author: {detailBook.author}</H4>
           <ImgDetail src={detailBook.image} alt={detailBook.title}/>
           {detailBook.state?
               <SpanStatusOn>Disponible</SpanStatusOn>
           :
               <SpanStatusOff>No Disponible</SpanStatusOff>
           }

        
           <P dangerouslySetInnerHTML={{ __html: detailBook.content}}></P>
           <ContainerCat>

               {detailBook.categories?.map((e, i) => 

                    <SpanCat key={i}>{e} </SpanCat> 
             
             )}
             </ContainerCat>
          
        <ContainerCat>
          <SpanInfo>Pages: {detailBook.pages}</SpanInfo>
          <SpanInfo>language: {detailBook.language}</SpanInfo>
        </ContainerCat>

        <ContainerCat>
         <SpanDate>Publisher: {detailBook.publisher}</SpanDate>
         <SpanDate>Publisher Date: {detailBook.publisher_date}</SpanDate>
        </ContainerCat>

             </SubContainer>
         </ContainerDetail>
    </>
  )
}
