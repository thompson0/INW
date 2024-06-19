import data from '../../artigos.json';

function Home() {
    return (
        <div className='grid grid-cols-3 gap-4 bg-black p-4'>
            {
                data.map((artigo, index) => (
                    <div className='font-bold text-white p-4' key={index}>
                        
                        <div className="block p-4 w-full h-full bg-red-900 border-gray-600 rounded-lg shadow dark:bg-gray-600 dark:border-gray-600">

                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-black dark:text-white">{artigo.title}</h5>

                            <img className="object-cover w-full h-40 mb-4 rounded-lg" src={artigo.image} alt={artigo.title} />
                            
                            <div className='tags mb-4 flex flex-wrap'>
                                {artigo.tags.map((tag, tagIndex) => (
                                    <span className="bg-black p-1 m-1 rounded" key={tagIndex}>{tag}</span>
                                ))}
                            </div>
                            
                            <div className='texto '>
                                {artigo.text.map((paragrafo, paraIndex) => (
                                    <p key={paraIndex} className="font-bold text-black dark:text-white mb-  ">{paragrafo}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
