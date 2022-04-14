import React from 'react'
import {Container, Name, LastName, InputIdentification} from './loginStyled.js'

function Login() {
    return (
      <>
      <Container>
          <h2>Iniciar Sesion</h2>
        <Name/>
        <LastName/>
        <InputIdentification/>

        <button>login</button>
    </Container>
        </>
  )
}

export default Login;