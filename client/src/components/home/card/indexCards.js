import React from 'react';
import {Container, ImgBook, SubContainer, ContainerInfo } from './styledCards.jsx'



export default function Card(
  {title, author, content_short, 
  publisher_date, imagen, id_api, id, state})
 {
   console.log(imagen)
  return (
    <>
    <Container>
      <SubContainer>

       <ImgBook src={imagen} alt={title}/>
       
       <ContainerInfo>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{content_short}</p>
        <span>Publisher date: {publisher_date}</span>
        <span>status: {state? 'Disponible' : 'Prestado'}</span> 
       </ContainerInfo>
      
      </SubContainer>
    </Container>
    </>  
  )
}
