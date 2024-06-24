import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rodape from "./Componentes/Rodape";

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(error => console.log(error));
    }, []);
    return ( 
        <>
        <div className="bg-black">
            <h1 className="text-white font-bold text-6xl bg-black bg-opacity-0 p-2 mb-9 text-center">
                Seus filmes Favoritos
            </h1>
        <div className="container mx-auto mt-9">
    <div className="flex flex-wrap justify-center">
        {filmes.map(filme => (
            <div className="card-filme bg-red-800 p-2 rounded-lg mb-8 mx-4" key={filme.id} style={{ maxWidth: '400px' }}>
                <img
                    className="w-full h-auto rounded-lg"
                    src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}/>
                <h3 className="text-black font-bold text-3xl mt-2">{filme.title}</h3>
                <Link to={`${filme.id}`} className="bg-black p-2 font-bold text-white text-3xl mt-2 rounded block text-center"> 
                                    <p>
                                    Saiba Mais
                                     </p>
                                </Link>
            </div>
            
        ))}

            </div>
            
        </div>
        <Rodape/>
        </div>
               
        </>
     );
}

export default Favoritos;