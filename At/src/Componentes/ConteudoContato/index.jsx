function ConteudoContato() {
    return (
  <div className="ConteudoContato">
    <div className="text-containerContato">
      <h1>Dúvidas e suporte, entre em contato:</h1>
      <div className="icones">
        <img className="twitter" src="twitter.png" alt="" />
        <img className="insta" src="insta.png" alt="" />
        <img className="discord" src="discord.png" alt="" />
      </div>
    </div>
  
    <hr className="linha-vertical" />
  
    <form className="formulario">
      <div className="form-nome">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />
      </div>
      <div className="form-email">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-msg">
        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows="5"></textarea>
      </div>
      <div className="brancoContato">
        <button><p> Enviar </p></button>
      </div>
    </form>
  </div>
      
  
    
    );
  }
  
  export default ConteudoContato;
  