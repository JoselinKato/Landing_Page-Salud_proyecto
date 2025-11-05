import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-bootstrap';
import '../styles/navbar.css'
import Logo from "../../public/favicon.ico"

function NavbarPrin() {
  return (
    <>
      <Navbar className="divPadre"  >
        <div >
          <Navbar.Brand >
            <Row>
           <Col>
            <img
              alt=""
              src={Logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              style={{marginTop:"38%", marginLeft:"20%"}}
            />{' '}
             </Col>
             <Col>

                 <h2 style={{color:"white", marginTop:"22%"}}>SaludXChiapas</h2>
                </Col>
            </Row>
          </Navbar.Brand>
        </div>
        <div className="scroll-items">
  <button onClick={() => document.getElementById("servicios").scrollIntoView({ behavior: "smooth" })}>
    Servicios
  </button>

  <button onClick={() => document.getElementById("plataforma").scrollIntoView({ behavior: "smooth" })}>
    Plataforma
  </button>

  <button onClick={() => document.getElementById("impacto").scrollIntoView({ behavior: "smooth" })}>
    Impacto
  </button>

  <button onClick={() => document.getElementById("contacto").scrollIntoView({ behavior: "smooth" })}>
    Contacto
  </button>
</div>
      </Navbar>
      
    </>
  );
}

export default NavbarPrin;