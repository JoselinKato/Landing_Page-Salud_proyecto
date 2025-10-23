import React from "react";
import { Card, Button } from "react-bootstrap";

function CardReusable({ title, text, IconComponent }) {
  return (
    <Card style={{ width: "18rem", textAlign: "center", padding: "1rem", height:"100%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
      {IconComponent && (
        <div style={{ fontSize: "3rem", marginBottom: "1rem", backgroundColor:"var(--color-verde_fondo)", color:"var(--color-verde_letra)", borderRadius:"10%", width:"4rem", height:"4rem", display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"auto", marginRight:"auto" }}>
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
