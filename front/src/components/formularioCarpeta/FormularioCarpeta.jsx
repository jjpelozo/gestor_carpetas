import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postData } from "../../state/reducers/carpeta";
import {Link} from "react-router-dom"

import "./FormularioCarpeta.css";

import { Button } from "@material-ui/core";

function FormularioCarpeta() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [carpetaUnica, setCarpetaUnica] = useState(false);
  const carpetaSingle = useSelector((store) => store.carpetaSingle);

  useEffect(() => {
    setCarpetaUnica(carpetaSingle);
  }, []);

  const [data, setData] = useState({
    numero: "",
    autos: "",
    juzgado: "",
    estado: "",
    aportante: "",
    operativo: "",
    representado: "",
    derivacion: "",
    comentario: "",
  });

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postData({
        numero: data.numero,
        autos: ((data.autos).toUpperCase()),
        aportante: ((data.aportante).toUpperCase()),
        operativo: data.operativo,
        representado: data.representado,
        derivacion: data.derivacion,
        comentario: data.comentario,
      })
    ).then(() => history.push("/carpetas"));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} action="" className="nuevaCarpeta__form">
        <div className="nuevaCarpeta__num">
          <label className="form-label">Numero de Carpeta</label>
          <input
            type="number"
            name="numero"
            value={data.numero}
            onChange={handleData}
          />
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

        <label className="form-label" value={data.comentario}>
          Descripcion
        </label>
        <textarea
          name="comentario"
          cols="10"
          rows="5"
          onChange={handleData}
        ></textarea>
      </form>
      <div className="form__button">
        <Link>
      <Button onClick={handleSubmit} variant="outlined" type="button">
        {" "}
        Guardar{" "}
      </Button>
      </Link>
      
      <Link to={"/carpetas"}>
      <Button variant="outlined" type="button">
        {" "}
        Volver{" "}
      </Button>
      </Link>

      </div>
    </div>
  );
}

export default FormularioCarpeta;
