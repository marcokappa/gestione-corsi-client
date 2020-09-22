import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthProvider from "./providers/AuthProvider";
import PrivateRouter from "./components/PrivateRouter";
/* import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./layout/layout.scss"; */
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PrivateRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}
