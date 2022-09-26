import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import reportWebVitals from './reportWebVitals';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from './img/capi-login.svg';
import {Link} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <div>
 
<form autocomplete="off">
    <Box  
    display='flex'
    flexDirection={'column'}
    spacing={2}
    
    >
        <div className='titulo'>
        <img src={Logo}/>
        
        </div>
        <hr></hr>
        <div className='input-email'>
            <TextField id="Email" label="Email" variant="outlined" autocomplete = "off"/>
        </div>
        <div className='input-senha'>
            <TextField id="Senha"label="Senha" variant='outlined' type={'password'}/>
        </div>
        <div className='botao'>
            <Button variant="contained" id="Login">Login</Button>
            <Button>Esqueci a Senha</Button>
        </div>
        <div className='rodape'>
{/* descobrir o erro que causa quando eu tento ultilizar o link e por que todos os componentes da tela somem */}
              <p>Caso não tenha uma conta, <Link to='/registrar'> registre-se </Link> </p> 
             
        </div>
    </Box>
</form>

</div>
 
  );


reportWebVitals();
