import styled from 'styled-components'


export const Container  = styled.div`
     
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  padding: 1rem 0.5rem;

`;


export const SectionContainer  = styled.section`
     
    width: 100%;
    max-width: 420px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
    background-color: #FFDABA;

`;

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    padding-bottom: 1rem;

`;

export const InputName  = styled.input`
     
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;

`;

export const InputLastName = styled(InputName)`
     
`;

export const InputIdentification = styled(InputName)`
     
`;

export const ButtonLogin = styled.button`
  font-family: 'Nunito', sans-serif;
  border: none;
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color:#D8968F;

`;

export const Label = styled.label`
     
     margin-top: 1rem;

`;


