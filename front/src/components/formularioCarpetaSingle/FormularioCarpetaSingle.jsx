import React, { useState } from "react";
import "./FormularioCarpetaSingle.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";

function FormularioCarpetaSingle() {
  const carpetaSingle = useSelector((store) => store.carpetaSingle);
  const id = carpetaSingle._id;
  const history = useHistory();
 

  const [data, setData] = useState({
    numero: carpetaSingle.numero,
    autos: carpetaSingle.autos,
    juzgado: carpetaSingle.juzgado,
    estado: carpetaSingle.estado,
    aportante: carpetaSingle.aportante,
    operativo: carpetaSingle.operativo,
    representado: carpetaSingle.representado,
    derivacion: carpetaSingle.derivacion,
    comentario: carpetaSingle.comentario,
  });
  console.log(data);

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .put(`/api/carpetasingle/${id}`, {
        numero: data.numero,
        autos: data.autos,
        juzgado: data.juzgado,
        estado: data.estado, 
        aportante: data.aportante,
        operativo: data.operativo,
        representado: data.representado,
        derivacion: data.derivacion,
        comentario: data.comentario,
      })
      .then(() => {
        return history.push(`/carpetas`);
      })
      .then(() => {
        return history.push(`/carpetasingle/${id}`);
      });
  
  };
  return (
    <div className="form">
      <form action="" className="nuevaCarpeta__form">
        <div className="nuevaCarpeta__header">
          <div >
            <label className="form-label">Numero de Carpeta</label>
            <input
            className="nuevaCarpeta__headerInput"
              type="number"
              name="numero"
              value={data.numero}
              onChange={handleData}
            />
          </div>

          <div>
            <label className="form-label">Juzgado</label>
            <input
            className="nuevaCarpeta__headerInput"
              type="text"
              name="juzgado"
              value={data.juzgado}
              onChange={handleData}
            />
          </div>
          <div>
            <label className="form-label">Estado</label>
            <select
            className="nuevaCarpeta__headerInput"
            name="estado"
            value={data.estado}
            onChange={handleData}
          >
            <option value="...">...</option>
            <option value="Tramite">Tramite</option>
            <option value="Baja">Baja</option>
          </select>
          </div>
        </div>

        <div className="nuevaCarpeta__autos">
          <label>Autos</label>
          <input
            type="text"
            name="autos"
            value={data.autos}
            onChange={handleData}
          />
        </div>

        <div className="nuevaCarpeta__select">
          <label className="form-label">Aportante</label>
          <input
            type="text"
            name="aportante"
            value={data.aportante}
            onChange={handleData}
          />

          <label className="form-label">Operativo</label>
          <select name="operativo" value={data.operativo} onChange={handleData}>
            <option value="...">...</option>
            <option value="Julia Pedrazzi">Dra. Pedrazzi Julia</option>
            <option value="Ayelen Perazzo">Dra. Perazzo Ayelen</option>
            <option value="Federico Ibarra">Dr. Ibarra Federico</option>
            <option value="Javier Favier Dubois">
              Dr. Favier Dubois Javier
            </option>
          </select>

          <label className="form-label">Representado</label>
          <select
            name="representado"
            value={data.representado}
            onChange={handleData}
          >
            <option value="...">...</option>
            <option value="Actor">Actor</option>
            <option value="Demandado">Demandado</option>
          </select>
          <label className="form-label">Derivacion</label>
          <select
            name="derivacion"
            value={data.derivacion}
            onChange={handleData}
          >
            <option value="...">...</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>

        <label className="form-label">Descripcion</label>
        <textarea
          value={data.comentario}
          name="comentario"
          cols="10"
          rows="5"
          onChange={handleData}
          className="texto"
        ></textarea>
      </form>
        <div className="form__button">
      <Button onClick={handleClick} variant="outlined" type="button" >
        {" "}
        Guardar{" "}
      </Button>
      </div>
    </div>
  );
}

export default FormularioCarpetaSingle;
