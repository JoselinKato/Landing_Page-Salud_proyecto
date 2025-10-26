import React from 'react';
import '../styles/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer-principal">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="footer-copyright">
              © 2025 JuntosXSalud. Todos los derechos reservados.
            </p>
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;