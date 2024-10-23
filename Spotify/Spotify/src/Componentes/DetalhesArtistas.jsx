import { useParams } from "react-router-dom"

export default function DetalhesArtistas(){

    const { id } = useParams()


    return(
    <p> { id} </p>
)
    
}
