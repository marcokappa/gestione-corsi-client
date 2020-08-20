import React, { useState, useEffect, useMemo, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAuthUser } from "../services/AuthServices";

const initialAuthData = {};
/**
 * Componente utilizzato per propagare tramite context tutte le informazioni e le funzionalità legate all'autenticazione.
 *
 * @param  props
 */
const AuthProvider = (props) => {
  const [authData, setAuthData] = useState(initialAuthData);

  //recupero i dati dal cookie JWT se presente
  useEffect(() => {
    //TODO: usare useCollback per ottimizzare: https://www.youtube.com/watch?v=4BranN3qnDU
    const currentAuthData = getAuthUser();
    if (currentAuthData) {
      setAuthData(currentAuthData);
    }
  }, []);

  const onLogout = () => setAuthData(initialAuthData);

  const onLogin = (newAuthData) => setAuthData(newAuthData);

  //const authDataValue = useMemo({ ...authData, onLogin, onLogout }, [authData]);

  return (
    <AuthContext.Provider value={{ authData, onLogin, onLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

//export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
