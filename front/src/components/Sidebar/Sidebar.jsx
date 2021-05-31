import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div>
      <Link to={"/carpetas"}>
        <Button variant="outlined">Carpetas</Button>
      </Link>

      <Link>
        <Button variant="outlined">Clientes</Button>
      </Link>

      <Link to={"/calendario"}>
        <Button variant="outlined">Calendario</Button>
      </Link>

      <Link to={"/descargaarchivos"}>
        <Button variant="outlined">Archivos</Button>
      </Link>

      <Link to={"/paginas"}>
        <Button variant="outlined">Paginas</Button>
      </Link>
      
      </div>

  
    </div>
  );
}

export default Sidebar;
