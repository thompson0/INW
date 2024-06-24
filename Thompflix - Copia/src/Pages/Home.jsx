import data from '../../artigos.json';
import Rodape from './Componentes/Rodape';
function Home() {
    return (
        <div className='bg-black p-4 min-h-screen'>

           
               
            <div  className='flex justify-center items-center mb-8 text-wh'>

            </div>
            <div className="flex justify-center items-center mb-8">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                    Principais Notícias do Dia
                </h1>
            </div>
            <div className='grid grid-cols-3 gap-4 mb-'>
                {
                    data.map((artigo, index) => (
                        <div className='font-bold text-white p-4' key={index}>
                            <div className="block p-4 w-full h-full bg-red-900 border-gray-600 rounded-lg shadow dark:border-gray-600">
                                <h5 className="mb-7 text-2xl font-bold tracking-tight text-white">{artigo.title}</h5>
                                <img className="object-cover w-full h-80 mb-8 rounded-lg" src={artigo.image} alt={artigo.title} />
                                <div className='texto'>
                                    {artigo.text.map((paragrafo, paraIndex) => (
                                        <p key={paraIndex} className="font-bold text-white mb-8">{paragrafo}</p>
                                    ))}
                                </div>
                            </div>
                          
                        </div>
                        
                    ))
                    
                }
                
            </div>
            <footer className='absulete w-full mt-10'>

            <Rodape/>
            </footer>
            
        </div>
        
    );
}

export default Home;
