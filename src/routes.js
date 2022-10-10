
import { Route, Routes as RoutesDom } from "react-router-dom"

import Login from './Pages/login/Login'
import Registrar from './Pages/registrar/Registrar'
import Feed from './Pages/feed/Feed'
// import Index from '../src/index'
 
const Routes = () => {
    return (
        <RoutesDom>
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/feed" element={<Feed />}/>
        </RoutesDom>
    )
  }
  
  export default Routes