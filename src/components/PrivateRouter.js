import React from "react";
import { Switch, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CorsoPage from "../pages/CorsoPage";
import PrivateRoute from "./PrivateRoute";

/**
 * Componente che definisce il routing dell'applicazione. Utilizza il componente PrivateRoute per le rotte private (con autenticazione)
 */
const PriveteRouter = () => (
  <Switch>
    <Redirect from="/" exact to="/home" />
    <Redirect from="/corsi" exact to="/home" />
    <PrivateRoute path="/home" component={HomePage} />
    <PrivateRoute path="/corso/:id" component={CorsoPage} />
  </Switch>
);

//

export default PriveteRouter;
