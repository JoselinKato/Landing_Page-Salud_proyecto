import React from "react";
import { Card } from "react-bootstrap";

function CardReusable({ title, text, IconComponent }) {
  return (
    <Card
      style={{
        width: "100%", 
        textAlign: "center",
        padding: "1rem",
        height: "100%",
        border: "1px solid var(--color-verde_letra)", 
        boxShadow: "none", 
      }}
    >
      {IconComponent && (
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            backgroundColor: "var(--color-verde_fondo)",
            color: "var(--color-verde_letra)",
            borderRadius: "10%",
            width: "4rem",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <IconComponent />
        </div>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardReusable;