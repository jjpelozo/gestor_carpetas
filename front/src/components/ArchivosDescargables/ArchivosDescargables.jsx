import React from "react";

import Jesus from "../../archivos/jesus.pdf";


function ArchivosDescargables() {
  return (
    <div>
      <h2>Documentos para descargar</h2>
      <a href={Jesus} download="Carta_documento">
        Carta Documento
      </a>
    </div>
  );
}

export default ArchivosDescargables;
