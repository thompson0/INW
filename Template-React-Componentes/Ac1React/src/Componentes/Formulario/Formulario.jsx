function Formulario(){
    return(
     <>
         <div className="formulario">
            <h2>Entre em Contato</h2>
            <form action="#" method="POST">
                <input type="text" name="nome" placeholder="Seu Nome" required />
                <input type="email" name="email" placeholder="Seu E-mail" required />
                <textarea name="mensagem" placeholder="Sua Mensagem" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </>      

    )
}
export default Formulario