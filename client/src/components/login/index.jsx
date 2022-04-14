import React from 'react';
import  {useEffect, useRef, useState, useContext} from 'react'
import AuthContext from '../context/AuthProvider.js';
import {Container ,InputName, InputLastName, InputIdentification, 
  SectionContainer, Form, ButtonLogin, Label} from './loginStyled.js'

function Login() {
  
  // const {setAuth} = useContext(AuthContext)
  // const userRef = useRef(null);
  // const errRef = useRef();

  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [ident, setIdent] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [succes, setSuccess] = useState(false);

  useEffect(() => {
    // userRef.current.focus();
}, [])


  useEffect(()=>{
    setErrMsg('')
  }, [name, ident])

    return (

     <Container>

      <SectionContainer>
       
        <h2>Login to start</h2>
        <Form>
          
          <Label htmlFor="name">Name:</Label>
          <InputName type={'text'} id="name" autoComplete="off"/>

          <Label htmlFor="last-name">Last name:</Label>
          <InputLastName  type={'text'} id="last-name" autoComplete="off"/>

          <Label htmlFor="identification">Identification:</Label>
          <InputIdentification type={'text'} id="identification" autoComplete="off"/>

          <ButtonLogin>login</ButtonLogin>

        </Form>


      </SectionContainer>
     </Container> 
  )
}

export default Login;