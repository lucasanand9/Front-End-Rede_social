import * as React from 'react';
import PlaceholderImg from '../../img/placeholder-postagem.svg'
import Avatar from '@mui/material/Avatar';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

import { deepOrange } from '@mui/material/colors';



function Postagem(){



    return(
        
        <div className="postagem-card">
            <div className="topo-postagem">
                <div className="Avatar"> <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar> </div>
                <div className="Nome-do-perfil"> <h1>Santos</h1> </div>
                <div className="inutil"></div>
            </div>
            <div className="conteudo-postagem">
                <img className="postagem-img" src={PlaceholderImg}/>
            </div>
            <div className="footer-postagem">
              <div className="CurtirComentar">
                <div className="curtir"><FavoriteBorderIcon/></div>
                <div className="comentario"><SpeakerNotesIcon/></div>
                <div className="vazio-postagem"></div>
              </div>
              <div className="LegendaLermais">
                <div className="legenda">ler legenda...</div>
                <div className="vazio-postagem"></div>
 
              </div>
                      
              </div>
            </div>
           
        

    );
}
export default Postagem