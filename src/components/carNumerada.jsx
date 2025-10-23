import React from "react";
import "../styles/CardNumerada.css";

function CardNumerada({ number, title, text }) {
  return (
    <div className="card-numerada">
      <div className="numero-circulo">{number}</div>
      <div className="contenido">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CardNumerada;
