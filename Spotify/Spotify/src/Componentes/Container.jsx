function Container({ children }) {
    return (  
        <>
         <section className="w-screen flex">

         {children}
         </section>
           
        </>
    );
}

export default Container;