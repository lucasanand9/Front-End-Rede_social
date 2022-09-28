import React from 'react';

import {  BrowserRouter as Router, Routers, Route} from "react-router-dom";

import Index from './index';
import Registrar from './Pages/Registrar';
import Login from './Pages/Login'


function caminhos() {
//https://www.youtube.com/watch?v=1lXHzKgazys
return(
    //rotas
<Router>
    <Routers>
        <Route path='/login' element={<Login />}/>
        <Route path='/registrar' element={<Registrar />}/>
    </Routers>
</Router>

);

}
export default caminhos;