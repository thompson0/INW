function ConteudoSobre(){
    return(
        <div className="Container">
        <div className="Conteudosobre">
          <div className="text-containersobre">
            <h1>Bem-vindo à revolução dos vídeos!</h1>
            <p>
              Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.
            </p>
            <div className="text-buttonsobre">
              <button>
                <p>Baixe o app</p>
              </button>
            </div>
          </div>
          <div className="imgsobre">
            <img src="/peixe.png" alt="" className="peixe" />
            <img src="seguranca.png" alt="" />
          </div>
        </div>
        <div className="cinza">
          <p>
            Planos
          </p>
          <div className="planos">
            <div className="plano1">
              <div className="azul">
                <h2>Individual</h2>
                <div className="branco">
                  <p>
                    1 usuário
                  </p>
                  <select name="videos" id="videos">
                    <option value="videos">10 videos <sifrao>R$15</sifrao>
                    </option>
                  </select>
                  <button>
                    <h4>Cadastrar</h4>
                  </button>
                </div>
              </div>
            </div>
  
            <div className="plano2">
              <div className="azul-branco">
                <h2>Profissional - Times</h2>
                <div className="branco-azul">
                  <p>
                  1-10 Usuários
                  </p>
                  <select name="videos" id="videos">
                    <option value="videos">Vídeos ilimitados  <a>R$40</a>
                    </option>
                  </select>
                  <p>
                  +10 Usuários
                  </p>
                  <select name="videos" id="videos">
                    <option value="videos">Vídeos ilimitados   <a>R$20</a>
                    </option>
                  </select>
                  <button>
                    <h4>Cadastrar</h4>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="plano1">
              <div className="azul-branco">
                <h2>Corporativo</h2>
                <div className="branco-azul">
                    <img src="contato.png" alt="" />
                  <button>
                    <h4>Cadastrar</h4>
                  </button>
                </div>
              </div>
            </div>
  
         
          </div>
  
        </div>
      </div>
    );
}
export default ConteudoSobre

