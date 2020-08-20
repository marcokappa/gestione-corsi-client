import React from "react";
import { Switch, Redirect } from "react-router-dom";
import HomePageCorsi from "../pages/HomePageCorsi";
import PrivateRoute from "./PrivateRoute";

/**
 * Componente che definisce il routing dell'applicazione. Utilizza il componente PrivateRoute per le rotte private (con autenticazione)
 */
const PriveteRouter = () => (
  <Switch>
    <Redirect from="/" exact to="/home" />
    <PrivateRoute path="/home" component={HomePageCorsi} />
  </Switch>
);

//

export default PriveteRouter;
