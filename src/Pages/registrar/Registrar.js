import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import Routes from '../../routes';
import '../login/login.css';
import Typography from '@mui/material/Typography';
import Cadastrar from "../../img/casdastrar.svg"


function Registrar() {

    return(
        <div>
        <Routes />
    
        <Box  
        display='flex'
        flexDirection={'column'}
        spacing={2}
        component='form'
        id='pagina-cadastro'
        >
            <div className='titulo'>
                
            <img src={Cadastrar}/>
            
            </div>
            <hr></hr>
            <div className='input-usuario'>
                <TextField id="Usuario" label="Usuario" variant="outlined" autocomplete = "off"/>
            </div>
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
                  <p>Caso ja tenh uma conta, realize o <NavLink to='/login'>Login</NavLink></p> 
                 
            </div>
        </Box>
    
    
    </div>
    );


}

export default Registrar;