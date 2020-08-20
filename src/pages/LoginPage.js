import React, { useRef, useState, useContext } from "react";
//import { useAuthContext } from "../providers/AuthProvider";
import { loginUser } from "../services/AuthServices";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { onLogin } = useContext(AuthContext);

  const [error, setError] = useState(null);

  const emailInput = useRef();
  const pswInput = useRef();

  const handleSubmit = () => {
    const currentFormValue = {
      email: emailInput.current.value,
      password: pswInput.current.value,
    };

    loginUser(currentFormValue).then(onLogin).catch(setError);
  };

  return (
    <div>
      {error ? <span style="error">{error}</span> : null}
      <input ref={emailInput} type="text" name="email" />
      <input ref={pswInput} type="password" name="password" />
      <button onClick={handleSubmit}>Sign in</button>
    </div>
  );
};

export default LoginPage;
