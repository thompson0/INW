import data from '../../artigos.json';
import Rodape from './Componentes/Rodape';
function Home() {
    const moanaArticle = data.find(artigo => artigo.title === "Novidades no mundo do cinema");
    const moanaIimg = data.find(artigo => artigo.img === "Moana2.jpg");
    return (
        <div className='bg-black p-4 min-h-screen'>

            <div  className='flex justify-center items-center mb-8'>
                <img src="Moana2.jpg" alt="" />
            </div>
            <div className="flex justify-center items-center mb-8">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                    Mais Notícias Relacionadas
                </h1>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    data.map((artigo, index) => (
                        <div className='font-bold text-white p-4' key={index}>
                            <div className="block p-4 w-full h-full bg-red-900 border-gray-600 rounded-lg shadow dark:border-gray-600">
                                <h5 className="mb-4 text-2xl font-bold tracking-tight text-white">{artigo.title}</h5>
                                <img className="object-cover w-full h-40 mb-4 rounded-lg" src={artigo.image} alt={artigo.title} />
                                <div className='texto'>
                                    {artigo.text.map((paragrafo, paraIndex) => (
                                        <p key={paraIndex} className="font-bold text-white mb-2">{paragrafo}</p>
                                    ))}
                                </div>
                            </div>
                          
                        </div>
                        
                    ))
                    
                }
                
            </div>
            <Rodape/>
        </div>
        
    );
}

export default Home;
