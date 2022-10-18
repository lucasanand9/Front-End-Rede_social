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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec at lacus a est molestie fermentum vitae at eros. 
                    Fusce porta posuere tellus, id eleifend lacus pretium non. 
                    Nullam efficitur facilisis tincidunt. Cras dui nisi, congue sit amet pretium viverra, 
                    sodales id ex. Donec pharetra scelerisque felis et facilisis. In rutrum sed libero sed congue. 
                    Vestibulum rhoncus tortor et magna pulvinar luctus. Nullam dapibus, sapien quis iaculis posuere, risus elit 
                    congue risus, in euismod neque urna eget magna. Curabitur at rutrum elit, sed bibendum mi. Sed non condimentum 
                    lacus.</p>
                </div>
            </div>
        </div>

    );
}
export default Postagem