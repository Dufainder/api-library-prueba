import React from "react";
import {Route, Routes} from 'react-router-dom'; 
import Login from "./components/login/index.jsx";
import Home from "./components/home/indexHome.js";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={ <Login/>}/> 
        <Route path="/home" element={<Home/>}/>
      </Routes>
     
    </>
  );
}

export default App;
