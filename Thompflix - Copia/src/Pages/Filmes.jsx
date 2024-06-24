import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Rodape from "./Componentes/Rodape";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Filmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR')
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(error => console.log(error));
    }, []);

   

    return (
        <div className="bg-black min-h-screen">
            <div className="relative mb-10">
                <img className="w-full h-[960px]" src="WHI.jpg" alt="Banner" />
                <div className="absolute top-0 left-0 w-full text-center">
                    <h1 className="text-white font-bold text-8xl bg-black bg-opacity-0 p-2 grid grid-cols-2">
                        Whiplash: Em Busca da Perfeição
                    </h1>
                </div>
                <button className="absolute bottom-40 left-20 bg-white hover:bg-gray-800 text-black font-bold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-2xl w-[450px] h-auto flex items-center">
                    <div className="w-20 h-auto">
                        <img src="arrowplay.jpg" className="h-full" />
                    </div>
                    <span className="ml-16 text-4xl">Assistir</span>
                </button>
            </div>

            <h1 className="text-white font-bold text-6xl bg-black bg-opacity-0 p-2 mb-9 text-center">
                Nosso catálogo de Filmes
            </h1>

            <div className="container mx-auto px-4">
                <Slider>
                    {filmes.map(filme => (
                        <div key={filme.id} className="p-2" style={{ maxWidth: '400px' }}>
                            <div className="card-filme bg-red-800 p-2 rounded-lg">
                                <img
                                    className="w-full h-[845px] rounded-lg"
                                    src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                                   
                                />
                                <h3 className="text-black text-4xl font-bold mt-2">{filme.title}</h3>
                                <Link to={`${filme.id}`} className="bg-black p-2 font-bold text-white text-2xl mt-2 rounded block text-center">
                                    
                                    <p>
                                    Saiba Mais
                                     </p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <Rodape />
        </div>
    );
}
