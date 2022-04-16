import React from 'react';
import { useNavigate }  from 'react-router-dom';
import { getDetailBook } from '../../actions/index';
import {Container, ImgBook, SubContainer, ContainerInfo } from './styledCards.jsx'
import { useDispatch} from 'react-redux';


export default function Card(
  {title, author, content_short, 
  publisher_date, imagen, id_api, id, state})
 {
  
  const dispatch = useDispatch();
  const history = useNavigate();

  const loadDetail = (id) => {  
   
    dispatch(getDetailBook(id))
    history('/detail')
}

  return (
    <>
    <Container onClick={()=>loadDetail(id)}>
      <SubContainer>

       <ImgBook src={imagen} alt={title}/>
       
       <ContainerInfo>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p dangerouslySetInnerHTML={{ __html: content_short }}></p>
        <span>Publisher date: {publisher_date}</span>
        <span>status: {state? 'Disponible' : 'Prestado'}</span> 
       </ContainerInfo>
      
      </SubContainer>
    </Container>
    </>  
  )
}
