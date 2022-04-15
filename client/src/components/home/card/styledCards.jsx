import styled from 'styled-components';

export const Container = styled.div`
  
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  height: 20%;
  border-radius: 15px;
  cursor:pointer;
  background-color: #DEAF07;

  :hover{
    box-shadow: 0 2px 2px rgba(242, 26, 190,0.1)inset, 0 0 8px #784107;       
  }
   
`;

export const ImgBook = styled.img`
  
  width: 200px;
  margin: 1%;
  height: 200px;
  border-radius: 15px;
  
`;

export const SubContainer = styled.div`
  
  display: flex;
  gap:5px;
   
`;

export const ContainerInfo = styled.div`
  
  display: flex;
  flex-direction: column;
  margin:5px;

   
`;