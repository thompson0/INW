import { useEffect } from "react";
import CardSidebar from "./Componentes/CardSidebar";
import Container from "./Componentes/Container";
import ConteudoPrincipal from "./Componentes/ConteudoPrincipal";
import Header from "./Componentes/Header";
import Sidebar from "./Componentes/Sidebar";
import { useState } from "react";

function App() {
  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/artistas")
      .then((res) => res.json())
      .then((data) => setArtistas(data))
      .catch((err) => console.log(err))
      .finally(()=> console.log('Finalizou a requisição'))
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Sidebar>
          <CardSidebar />
          <CardSidebar />
          <CardSidebar />
        </Sidebar>
        <ConteudoPrincipal>
          <>
          <h1>Rap</h1>
          {
            artistas
            .filter( artistas => artistas.genero ==="Rap")
            .map( artistas => (
              
            <div className="bg-red-600 h-[200px] w-[200px] p-4 mb-10">
              <h1>{artistas.name}</h1>
            <div className="bg-cyan-500 h-[50px] mb-16"></div>
            
          </div>
            ))
          }
          <h1>Hip Hop</h1>
          {
            artistas
            .filter( artistas => artistas.genero ==="Hip Hop")
            .map( artistas => (
              
            <div className="bg-red-600 h-[200px] w-[200px] p-4 mb-10">
              <h1>{artistas.name}</h1>
            <div className="bg-cyan-500 h-[50px] mb-16"></div>
            
          </div>
            ))
          }
          
          
          </>
      
          
        </ConteudoPrincipal>
      </Container>
    </>
  );
}

export default App;
