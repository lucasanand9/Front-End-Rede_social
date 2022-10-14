import * as React from 'react';
import './feed.css'
import CardPostagem from '../postagem/Postagem'
import NavBar from './navbar'
import Container from '@mui/material/Container';



function Feed(){
    return(
        <div>
            <NavBar/>
        <div className="body">
           <Container >
               
                    <CardPostagem/>
               
           </Container>
        </div>
        </div>
    );
}

export default Feed