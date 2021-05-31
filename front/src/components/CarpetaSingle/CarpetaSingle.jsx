import React, { useEffect, useState } from "react";
import "./CarpetaSingle.css";
import FormularioCarpetaSingle from "../formularioCarpetaSingle/FormularioCarpetaSingle";
import { useSelector, useDispatch } from "react-redux";
import { setCarpetaSingle } from "../../state/reducers/carpetaSingle";
import { Button } from "@material-ui/core";


function CarpetaSingle({ id }) {
  const dispatch = useDispatch();

  const carpetaSingle = useSelector((store) => store.carpetaSingle);

  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    dispatch(setCarpetaSingle(id));
  }, []);



  return (
    <div>
      <div className="carpetaSingle">
        <div className="">
          {showSearch && <FormularioCarpetaSingle />}

          <Button
            onClick={() => setShowSearch(!showSearch)}
            className="carpetaSingle__Button"
            variant="outlined"
          >
            {showSearch ? "Cerrar" : "Modificar Carpeta"}
          </Button>
        </div>

        <h3>{carpetaSingle.autos}</h3>
        <div className="carpetaSingle__titulo">
          <p>Numero de carpeta: {carpetaSingle.numero}</p>
          <p>Juzgado: {carpetaSingle.juzgado}</p>
          <p>Estado: {carpetaSingle.estado}</p>
        </div>
        <div className="carpetaSingle__info">
          <p> Aportante: {carpetaSingle.aportante}</p>
          <p>Operativo: {carpetaSingle.operativo}</p>
          <p>Representado: {carpetaSingle.representado}</p>
          <p>Derivacion: {carpetaSingle.derivacion}</p>
        </div>
        <div className="carpetaSingle__comentarios">
         <p className="texto">
            Comentarios: <br />
            <br/>
            {carpetaSingle.comentario}
           
          </p> 
        </div>
       
        
      </div>
    </div>
  );
}

export default CarpetaSingle;
