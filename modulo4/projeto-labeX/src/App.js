import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import { ListaDeViagens } from './components/ListaDeViagens';
import { PaginaPrincipal } from './components/PaginaPrincipal';


  const App = () => {
  return (

    <BrowserRouter>

    <Switch>  

        <Route exact path={"/home"} component={PaginaPrincipal}>
         {/* <PaginaPrincipal/> */}
        </Route>

        <Route exact path={"/viagens"} component={ListaDeViagens}>
          {/* <ListaDeViagens/> */}
        </Route>

        <Route>
          {/* <AdminHome/> */}
        </Route>
      
        </Switch>
       
    </BrowserRouter>
     
    
  );
}
export default App;

