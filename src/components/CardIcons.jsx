import React from "react";
import "../styles/CardIcons.css"; 

function CardIcons({ IconComponent, title, text }) {
  return (
    <div className="card-icon"> 
      <div className="icono-circulo">
        {IconComponent && <IconComponent />}
      </div>
      <div className="contenido">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CardIcons;