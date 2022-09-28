import React from 'react';
import './login.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from '../img/capi-login.svg';
import {NavLink } from "react-router-dom";

import Routes from '../routes';

function login() {

    return(
        <div>
            <Routes />
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
                      <p>Caso não tenha uma conta, <NavLink to='/registrar'>registre-se</NavLink></p> 
                     
                </div>
            </Box>
        </form>
        
        </div>
    );


}

export default login;