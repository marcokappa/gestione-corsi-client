import React, { useContext } from "react";
//import { useAuthContext } from "../providers/AuthProvider";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { authData, onLogout } = useContext(AuthContext);

  if (!authData) {
    return <Link to="/">Please log in</Link>;
  } else {
    return (
      <div>
        <p>Hello {authData.username}</p>
        <button onClick={onLogout}>Log out</button>
      </div>
    );
  }
};

export default UserInfo;
