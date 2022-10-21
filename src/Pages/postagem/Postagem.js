import * as React from 'react';
import PlaceholderImg from '../../img/placeholder-postagem.svg'
import Avatar from '@mui/material/Avatar';

function Postagem(){
    return(
        
        <div className="postagem-card">
            <div className="topo-postagem">
                <div className="Avatar"> <Avatar>S</Avatar> </div>
                <div className="Nome-do-perfil"> <h1>Santos</h1> </div>
                <div className="inutil"></div>
            </div>
            <div className="conteudo-postagem">
                <img className="postagem-img" src={PlaceholderImg}/>
            </div>
            <div className="footer-postagem">
                <div className="descricao">
                    <h3>descrição</h3>
                    {/* colocar um dropdown */}
                    <p></p>
                </div>
            </div>
        </div>

    );
}
export default Postagem