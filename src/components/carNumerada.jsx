import React from "react";
import "../styles/CardNumerada.css";

function CardNumerada({ number = null, IconComponent = null, title, text }) {
  return (
    <div className="card-numerada">
      
      {number && (
        <div className="numero-circulo">{number}</div>
      )}

      {IconComponent && (
        <div className="icono-cuadro">
          <IconComponent />
        </div>
      )}

      <div className="contenido">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CardNumerada;