import {Nav, NavLink, NavMenu, 
    Bars, InputCity, InputButton,
    SearchContainer, H3
} from './styledNavbar.jsx'

import React from 'react'
import {FaSearchengin} from 'react-icons/fa';

export default function Navbar({toggle}) {
  return (
    <>
       <Nav>
               
           <NavLink to='/'>

              <H3>Library</H3>

         </NavLink>
         


         <SearchContainer>
           <InputCity type='text' placeholder="Buscar.."/>
           <InputButton>
              <FaSearchengin color="black" fontSize='2.2em'/>
           </InputButton> 
         </SearchContainer>

         <Bars onClick={toggle}/>

         <NavMenu>

             <NavLink to='/home'>
                     
                     Home

             </NavLink>


             <NavLink to='/perfil'>
                     
                     Perfil

             </NavLink>

         </NavMenu>

       </Nav>
    </>
  )
}
