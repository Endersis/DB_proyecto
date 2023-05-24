import { ThemeProvider } from "@mui/material";
import Main from "./Main/main";
import { theme } from "./theme";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Conocenos from "./conocenos";



function App() {

  const[registros, setRegistros] = useState([])
  useEffect(() => {
    const getRegistros = ()=>{
        fetch('http://localhost:9000/api')
        .then(res=> res.json())
        .then(res=> console.log(res))
    }
    getRegistros()
    
    },[])
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
    <Route exact path="/" element={<Main/>} />
    <Route  path="/conocenos" element={<Conocenos/>} />
    </Routes>
  </Router>
  </ThemeProvider>
  );
}

export default App;
