import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Route } from "react-router-dom";
//import { useAuthContext } from "../providers/AuthProvider";
import LoginPage from "../pages/LoginPage";

/**
 * componente che si occupa di instradare verso un componente se l'autenticazione è presente.
 * Altrimenti dirotta sulla pagina di login.
 * @param {*} param0
 */
const PrivateRoute = ({ component, ...options }) => {
  const { authData } = useContext(AuthContext);
  console.log("Private route user: ", authData.user);
  console.log("Private route component: ", component);
  const finalComponent = authData.user ? component : LoginPage;

  return <Route {...options} component={finalComponent} />;
};

export default PrivateRoute;
