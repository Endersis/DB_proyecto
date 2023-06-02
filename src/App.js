import { ThemeProvider } from "@mui/material";
import Main from "./Main/main";
import { theme } from "./theme";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Conocenos from "./conocenos";
import Admin from "./admin";
import Agendar from "./agendar";
import Sucursales from "./sucursales";
import PaquetesPage from "./paquetes";



function App() {

  
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
    <Route exact path="/" element={<Main/>} />
    <Route  path="/conocenos" element={<Conocenos/>} />
    <Route  path="/admin" element={<Admin/>} />
    <Route  path="/agendar" element={<Agendar/>} />
    <Route  path="/sucursales" element={<Sucursales/>} />
    <Route  path="/paquetes" element={<PaquetesPage/>} />
    </Routes>
  </Router>
  </ThemeProvider>
  );
}

export default App;
