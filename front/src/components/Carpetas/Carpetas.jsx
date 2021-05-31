import React, { useEffect, useState } from "react";
import "./Carpetas.css";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import axios from "axios";

function Carpetas() {
  const [carpetas, setCarpetas] = useState([]);
  const [titulo, setTitulo] = useState ("")

  const history = useHistory();

  useEffect(() => {
   return axios.get("/api/carpetas").then((carpetas) => {
      setCarpetas(carpetas.data);
    });
  }, []);
  console.log(carpetas)

  useEffect(() => {
    return axios.post("/api/carpetas", {autos: titulo}).then((carpetas) => {
      setCarpetas(carpetas.data)
    });
  }, [titulo]);


  const handleClick = (id) => {
    history.push(`/carpetasingle/${id}`);
  };

  return (
    <div className="carpetas">
      <div  className="carpetas__center">

      <div>
      <Link to={"/carpetas/nuevacarpeta"}>
        <Button variant="outlined" className="carpetas__button">
          {" "}
          + Nueva Carpeta
        </Button>
      </Link>
      </div>
        <div className="header_center"  onChange={(e) => setTitulo((e.target.value).toUpperCase())}>
        <input type="text" />
        <SearchIcon/>
   
      </div>
    
      </div>

      <table cellpadding="0" cellspacing="0" className="carpetas__table">
        <tr className="carpetas__th">
          <th>Numero</th>
          <th>Autos</th>
          <th>Aportante</th>
          <th>Operativo</th>
          <th>Estado</th>
          <th className="carpetas__verCarpetasTitulos"></th>
        </tr>
        {carpetas.map((carpeta) => (
          <tr className="carpetas__td" key={carpeta._id}>
            <td>{carpeta.numero}</td>
            <td>{carpeta.autos}</td>
            <td>{carpeta.aportante}</td>
            <td>{carpeta.operativo}</td>
            <td>{carpeta.estado}</td>
            <td>
            <Button
              onClick={() => handleClick(carpeta._id)}
              className="carpetas__verCarpetas"
              variant="outlined"
            >
              Ver carpeta
            </Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Carpetas;
