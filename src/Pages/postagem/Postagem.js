import * as React from 'react';
import PlaceholderImg from '../../img/placeholder-postagem.svg'
import Avatar from '@mui/material/Avatar';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { deepOrange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import zIndex from '@mui/material/styles/zIndex';

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
            
              
               

                <Accordion sx={{background: '#b6b4b6', zIndex:99, }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Legenda</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                    
                </div>
           
        

    );
}
export default Postagem