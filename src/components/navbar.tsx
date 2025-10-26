import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-bootstrap';
import '../styles/navbar.css'

function NavbarPrin() {
  return (
    <>
      <Navbar className="divPadre"  >
        <div >
          <Navbar.Brand href="#home">
            <Row>
                <Col>
                 {/* <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
                </Col>
                <Col>
                 <h2 style={{color:"white"}}>JuntosXSalud</h2>
                </Col>
            </Row>
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarPrin;