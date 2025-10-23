import React from "react";
import { Card, Button } from "react-bootstrap";

function CardReusable({ title, text, IconComponent, buttonText, onButtonClick }) {
  return (
    <Card style={{ width: "18rem", textAlign: "center", padding: "1rem" }}>
      {IconComponent && (
        <div style={{ fontSize: "3rem", marginBottom: "1rem", backgroundColor:"var(--color-verde_fondo)", color:"var(--color-verde_letra)", borderRadius:"10%", width:"4rem", height:"4rem", display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"auto", marginRight:"auto" }}>
          <IconComponent />
        </div>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {buttonText && (
          <Button variant="primary" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardReusable;
