import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ConteudoPrincipal() {
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
    <div className="grid grid-cols-4 bg-rose-400 w-full h-auto items-center justify-center">
    <>
          <h1>Rap</h1>
          {
            artistas
            .filter( artistas => artistas.genero ==="Rap")
            .map( artistas => (
              <Link to={`/artistas${artistas._id}`}>
            <div className="bg-red-600 h-[200px] w-[200px] p-4 mb-10">
              <h1>{artistas.name}</h1>
            <div className="bg-cyan-500 h-[50px] mb-16"></div>
            
          </div>
              </Link>
              
           
            ))
          }
          <h1>Hip Hop</h1>
          {
            artistas
            .filter( artistas => artistas.genero ==="Hip Hop")
            .map( artistas => (
              <Link to={`/artistas${artistas._id}`}>
              <div className="bg-red-600 h-[200px] w-[200px] p-4 mb-10">
                <h1>{artistas.name}</h1>
              <div className="bg-cyan-500 h-[50px] mb-16"></div>
            </div>
                </Link>
            ))
          }
          
          
          </>
    </div>
  );
}

export default ConteudoPrincipal;
