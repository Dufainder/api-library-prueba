import styled from 'styled-components'

export const ContainerDetail  = styled.div`
     
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  padding: 1rem 0.5rem;
 

`;


export const SubContainer  = styled.div`
     
  display: flex;
  flex-direction: column;
  background-color: #FFDABA;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;

`;



export const ImgDetail   = styled.img`
     
     width: 350px;
     height: 450px;
     border-radius: 10px;
     align-self: center;
     margin-bottom: 10px;
  
`;

export const H2   = styled.h2`
     
     color: black;
     align-self: center;
     margin-top: 5px;
  
`;

export const H4   = styled.h4`
      color: black;
      align-self: center;
      margin-top: 2px;
      margin-bottom: 10px;
`;

export const P   = styled.p`
      color: black;
      align-self: center;
      max-width: 800px;
      margin: 20px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const SpanStatusOff   = styled.span`
      align-self: center;
      color: black;
      background-color: red;
      text-align: center;
      max-width: 200px;
      border-radius: 10px;
      padding: 5px;
`;
export const SpanStatusOn   = styled(SpanStatusOff)`
   
   background-color: greenyellow;
     
`;

export const SpanCat  = styled(SpanStatusOff)`

      background-color: #D8968F;
`;

export const ContainerCat  = styled.div`

    display: flex;
    justify-content: center;
    gap:10px;
    margin: 10px;

`;

export const SpanInfo  = styled(SpanStatusOff)`

      background-color: #FA626F;
      max-width: 300px;
`;

export const SpanDate  = styled(SpanInfo)`

      background-color: #F5906C;
      
`;