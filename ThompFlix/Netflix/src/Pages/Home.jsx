import data from '../../artigos.json'
function Home() {
    console.log (data)
    return (  
        <div className='grid grid-cols-3'>
        {
            data.map(
                (filme, index) =>(
                    <>
                    <div className='card' key={index}>
                    <h1 key={filme.title}>{filme.title}</h1> 
                    <img src={filme.image}></img>
                    </div>
                    <div className="tags">
                        {
                            filme.tags.map(tag =>(
                                <span className='bg-pink-800 text-white p-3 mb-4' key={tag}>{tag}</span>
                            ))
                        }
                    </div>
                    <div className="texto">
                    {
                            filme.text.map(texto =>(
                                <p key={texto}> {texto}</p>
                            ))
                        }
                    </div>
                    </>
                )
            )
        }
        </div>
    );
}

export default Home;