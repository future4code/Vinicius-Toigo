import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import { ListaDeViagens } from './components/ListaDeViagens';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import {Formulario} from './components/Formulario'

  const App = () => {
  return (

    <BrowserRouter>

    <Switch>  

        <Route exact path={"/home"} component={PaginaPrincipal}>
        
        </Route>

        <Route exact path={"/viagens"} component={ListaDeViagens}>
         
        </Route>

        <Route exact path={"/Formulario"} component={Formulario}>
       
        </Route>
      
        </Switch>
       
    </BrowserRouter>
     
    
  );
}
export default App;

