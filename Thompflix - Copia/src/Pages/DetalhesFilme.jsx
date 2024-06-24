import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rodape from "./Componentes/Rodape";

function DetalhesFilme() {
    const { id } = useParams();
    const [filme, setFilme] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
            .then(response => response.json())
            .then(response => setFilme(response))
            .catch(error => console.log(error))
    }, [id]);

    return (
        <div className="bg-black min-h-screen flex flex-col justify-between">
            <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-9">
                    <div className="md:w-1/2">
                        <img src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`} alt={filme.title} className="w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 bg-white text-black p-6 rounded-lg shadow-lg md:ml-6 mt-6 md:mt-0">
                        <p className="text-3xl md:text-4xl font-bold mb-4">{filme.title}</p>
                        <p className="text-lg md:text-2xl mb-5">{filme.overview}</p>
                        <p className="text-lg md:text-2xl mb-4">Avaliação: {filme.vote_average}</p>
                        <p className="text-md md:text-xl">Data de Lançamento: {filme.release_date}</p>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    );
}

export default DetalhesFilme;
