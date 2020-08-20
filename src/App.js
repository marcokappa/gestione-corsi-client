import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthProvider from "./providers/AuthProvider";
import PrivateRouter from "./components/PrivateRouter";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PrivateRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}
