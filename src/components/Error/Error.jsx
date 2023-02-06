import React from "react";
import "../Error/Error.css";
import Onearmplanche from "../../../public/Img/one-arm-planche.jpg";

function Error() {
  return (
    <>
      <section className="error_container_general">
          <p className="error_title">404</p>
          <p className="error_paragraph">
            lo sentimos, no encontramos su pagina requerida
          </p>
          <div className="img10_container">
            <img src={Onearmplanche} alt="" className="img10" />
          </div>
          <p className="error_paragraph paragraph2">
            Utiliza el menu para volver
          </p>
      </section>
    </>
  );
}

export default Error;
