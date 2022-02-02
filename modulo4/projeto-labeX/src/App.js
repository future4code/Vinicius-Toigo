import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import { ListaDeViagens } from './components/ListaDeViagens';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import {Formulario} from './components/Formulario';
import {AdminHome} from './components/AdminHome';
import {CriarViagem} from './components/CriarViagem';
import {Login} from './components/Login';

  const App = () => {
  return (

    <BrowserRouter>

    <Switch>  

        <Route exact path={"/"} component={PaginaPrincipal}>
        
        </Route>

        <Route exact path={"/viagens"} component={ListaDeViagens}>
         
        </Route>

        <Route exact path={"/formulario"} component={Formulario}>
       
        </Route>

        <Route exact path={"/adminhome"} component={AdminHome}>

          </Route>
          <Route exact path={"/criarviagem"} component={CriarViagem}>

           </Route>
          <Route exact path={"/login"} component={Login}> 

          </Route>
        </Switch>
       
    </BrowserRouter>
  
    
  );
}
export default App;

