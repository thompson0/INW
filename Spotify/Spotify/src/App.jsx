import { useEffect } from "react";
import CardSidebar from "./Componentes/CardSidebar";
import Container from "./Componentes/Container";
import ConteudoPrincipal from "./Componentes/ConteudoPrincipal";
import Header from "./Componentes/Header";
import Sidebar from "./Componentes/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {


  return (
    <>
      <Header />
      <Container>
        <Sidebar>
    
        </Sidebar>
        <Outlet/>  
      </Container>
    </>
  );
}

export default App;
