import {Container ,InputName, InputLastName, InputIdentification, 
  SectionContainer, Form, ButtonLogin, Label} from './loginStyled.js'

  import React from 'react';
  import { useNavigate }  from 'react-router-dom';
  import {postUser }from '../actions/index.js'
  import { useState, useEffect } from 'react';
  import { useDispatch, useSelector} from 'react-redux'

  function validate(input){
    let errors = {}
    if(!input.identification) {
        errors.identification = 'Identification is require'
    }
    return errors;
}




function Login() {
  
  const dispatch = useDispatch();
  const history = useNavigate();
  const [error, setError] = useState({})
  // const {setAuth} = useContext(AuthContext)
  // const userRef = useRef(null);
  // const errRef = useRef();

  const [input, setInput] = useState({
    
    name: '',
    last_name: '',
    identification: '', 

  })

  async function handleSubmit(evt){
    evt.preventDefault()
    dispatch(postUser(input))
    history('/home')
}

function handleChange(evt){
  setInput({
      ...input,
      [evt.target.name]: evt.target.value
  })
  setError(validate({
    ...input,
    [evt.target.name]:evt.target.value
}))
}



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
        <Form onSubmit={(evt) => handleSubmit(evt)}>
          
          <Label htmlFor="name">Name:</Label>
          <InputName  
             type="text"
             autoComplete="off"
             value = {input.name}
             name = 'name' 
             placeholder='add name...'
             onChange = {evt => handleChange(evt)}/>

          <Label htmlFor="last-name">Last name:</Label>
          <InputLastName  
             
             type="text"
             autoComplete="off"
             value = {input.last_name}
             name = 'last_name' 
             placeholder='add lastname...'
             onChange = {evt => handleChange(evt)}/>

          <Label htmlFor="identification">Identification:</Label>
          <InputIdentification 
              
              type="text"
              autoComplete="off"
              value = {input.identification}
              name = 'identification' 
              placeholder='add identi...'
              onChange = {evt => handleChange(evt)}
            
          />

          <ButtonLogin type='submit'>login</ButtonLogin>

        </Form>


      </SectionContainer>
     </Container> 
  )
}

export default Login;