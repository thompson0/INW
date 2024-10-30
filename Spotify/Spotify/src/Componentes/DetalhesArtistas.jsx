import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function DetalhesArtistas(){

    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:3000/artistas/${id}`)
          .then((res) => res.json())
          .then((data) => setArtistas(data))
          .catch((err) => console.log(err))
          .finally(()=> console.log('Finalizou a requisição'))
      }, []);

    return(
    <p> { id} </p>
)
    
}
