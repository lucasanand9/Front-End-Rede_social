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

function Login() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                <img src={Titulo}/>
                
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
                    <Button onClick={handleOpen}>Esqueci a Senha</Button>
                    <Modal 
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                        <div className="Modal-senha">

                            <form className="recuperar-senha-form">
                                <span className="close"><CloseIcon onClick={handleClose}/></span>
                            </form>
                            
                        </div>
                    </Modal>
                </div>
                <div className='rodape'>
                      <p>Caso não tenha uma conta, <Link to='/registrar'>registre-se</Link></p> 
                     
                </div>
            </Box>
        </form>
        
        </div>
    );


}

export default Login;