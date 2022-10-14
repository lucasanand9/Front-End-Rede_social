import * as React from 'react';
import PlaceholderImg from '../../img/placeholder-postagem.svg'

function Postagem(){
    return(

        <div className="postagem-card">
            <div className="topo-postagem">
                <span className="Nome-do-perfil">  </span>
            </div>
            <div className="conteudo-postagem">
                <img className="postagem-img" src={PlaceholderImg}/>
            </div>
            <div className="footer-postagem">

            </div>
        </div>

    );
}
export default Postagem