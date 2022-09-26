import './App.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Logo from './img/capi-login.svg';
import { Link, Route } from 'react-router-dom';
import Registrar from'./Registrar.js';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";



function App() {

  return (
    // Lucas: esqueci a senha
    // Santos: Registrar
    // Lembrar de usar o Material UI 
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
            {/* <p>Caso não tenha uma conta, <Link to="/registrar">registre-se</Link></p>  */}
           {/* <Route path="registrar" element={<Registrar />} />  */}
        </div>
    </Box>
</form>
  
</div>
 
  );
}

export default App;
