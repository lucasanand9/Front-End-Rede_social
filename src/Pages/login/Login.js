import * as React from 'react';
import './login.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Titulo from '../../img/capi-login.svg';
import {Link} from "react-router-dom";
import Modal from '@mui/material/Modal';
import Routes from '../../routes';
import CloseIcon from '@mui/icons-material/Close';
import postUsuarioLogin from './postUsuarioLogin';

function Login() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div>
            <Routes />
        
            <Box  
            display='flex'
            flexDirection={'column'}
            spacing={2}
            
            >
                <div className='titulo'>
                <img src={Titulo}/>
                
                </div>
                
                <div className='input-email'>
                    <TextField name="username" id="Email" label="Email" variant="outlined" autocomplete = "off"/>
                </div>
                <div className='input-senha'>
                    <TextField name="password" id="Senha"label="Senha" variant='outlined' type={'password'}/>
                </div>
                <div className='botao'>
                    <Button onClick={() => postUsuarioLogin()} type={'submit'} variant="contained" id="Login">Login</Button>
                    <Button onClick={handleOpen}>Esqueci a Senha</Button>
                    <Modal 
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                        <div className="Modal-senha">

                            <form className="recuperar-senha-form">
                                <div className="modal-cima"> <span className="texto"></span><h2>Esqueceu a sua senha?</h2> 
                                <span className="close" onClick={handleClose}><CloseIcon /></span></div>
                                <span className="texto2"><p>Informe seu Email que enviaremos um link</p></span>
                                <div className="modal-meio"> <TextField variant="outlined" label="Email" id='Email-senha'/> </div>
                                <div className="modal-baixo"><Button variant='contained'>Enviar Email</Button></div>
                            </form>
                            
                        </div>
                    </Modal>
                </div>
                <div className='rodape'>
                      <p>Caso n??o tenha uma conta, <Link to='/registrar'>registre-se</Link></p> 
                     
                </div>
            </Box>
        
        
        </div>
    );


}

export default Login;