import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
  
  background: #F59E14;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index:10px;

`;

export const NavLink = styled(Link)`
      
      color:#000;
      display: flex;
      align-items: center;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-decoration: none;
      padding: 0 1rem;
      height: 100%;
      cursor: pointer;
      
      &:hover{
          background-color: #AD765C;
      }
`;

export const Bars = styled(FaBars)`
     display: none;
     color: #000;

     @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 8px;
        /* position:absolute; */
        /* top: 0%;
        right: 0%; */
        /* transform: translate(-100%, 75%); */
        font-size: 1.8rem;
        cursor: pointer;
     }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px){
      display: none;
  }
`;


export const SearchContainer = styled.div`

   display: flex;
   gap: 10px;
   align-items: center;
`;

export const InputCity = styled.input`

box-shadow: 0 0px 0px 0;
border-radius: 10px;
border: none;
color:black;
/* border-color: blue; */
box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px #000;  
font-size: 12px;
padding: 7px;
background: snow;

:focus{
  
    box-shadow: 0 6px 6px rgba(229, 103, 23, 0.075)inset, 0 0 10px #E07E2D; 
    outline: 0 none;
  }

  ::placeholder{
    color: black;
    text-align: center;
    opacity: 0.6;
    font-size: 14px;
    align-items: center;
    justify-content: center;
  }



  @media screen and (max-width: 600px){
      display: none;
  }



`;

export const InputButton = styled.button`

     border-radius: 20px;
     color:black;
     text-decoration: none;
     font-size: 15px;
     /* padding: 2%; */
     border: none;
     text-decoration: none;
     box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px #000;     

     cursor: pointer;
     
     &:hover{
       color: snow;
       background-color: #E07E2D;
       border: none;
       text-decoration: none;
    }
`;

export const H3 = styled.h3`
  
  margin: 0;
  padding: 0;

`;