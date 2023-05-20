import { ThemeProvider } from "@mui/material";
import Main from "./Main/main";
import { theme } from "./theme";
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Conocenos from "./conocenos";

function App() {
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
