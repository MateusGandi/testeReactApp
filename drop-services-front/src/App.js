import React from "react";
//import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import LoginPage from "./views/LoginPage.js";
// //import NavBar from "./components/NavBar.js";
// import BarbeariasPage from "./views/BarbeariasPage.js";
// import DesktopPage from "./components/desktop-page.js";
// import DesktopBeginPage from "./components/desktop-begin-page.js";
// import PerfilPage from "./views/PerfilPage.js";
import Drawer from "./components/drawer.js";
import Teste from "./components/teste.js";
import CardBarbearia from "./components/CardBarbearia.js"
import { Card } from "@mui/material";
// import AgendamentoPage from "./views/AgendamentoPage.js";
// import { useHistory } from "react-router-dom";
//import { createTheme, ThemeProvider } from "@mui/material/styles";
import BarbeariasPage from "./views/BarbeariasPage.js";
import Css from './App.css'
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <>
      <BarbeariasPage></BarbeariasPage>
    </>
    </Router>
  );
};

export default App;
