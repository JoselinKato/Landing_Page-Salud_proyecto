import React from 'react';
import '../styles/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SiGmail } from "react-icons/si";
function Footer() {
  return (
    <footer className="footer-principal">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="footer-copyright" style={{marginTop:"12%"}}>
              © 2025 JuntosXSalud. Todos los derechos reservados.
            </p>
            
          </Col>
          <Col>
            <p id='contacto'>
              Contacto
            </p>
            <SiGmail size={20} color="red" />
            <a style={{marginLeft:"2%"}} href="mailto:saludxchiapas@gmail.com">saludxchiapas@gmail.com</a>
            <p>
              
            </p>
            <p>
              <p className="footer-credits">
              Créditos de imagen: 
              <a 
                href="https://www.instagram.com/cortes.ed9/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                cortes.ed9
              </a>
            </p>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;