const Contato = ()=>{
    return(
       <div className="ConteudoContato">
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <div className="icones">
            <img src="twitter.png" alt="" />
            <img src="insta.png" alt="" />
            <img src="discord.png" alt="" />
        </div>
        <hr className="linha-vertical"/>
            <form>
                <div className="form-nome">
                    <p>Nome:</p><input type="text"/>
                </div>
                <div className="form-email">
                    <p>E-mail:</p><input type="email"/>
                </div>
                <div className="form-msg">
                    <p>Mensagem:</p><textarea/>
                </div>
                <div className="form-button">
                    <button>Enviar</button>
                </div>
            </form>
       </div>
       
    )
}

export default Contato