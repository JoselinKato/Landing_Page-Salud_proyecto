import { Container, Row, Col } from "react-bootstrap";
import "../styles/Principal.css";
import Navbar from "../components/navbar";
import CardReusable from "../components/CardReusable";
import { 
  FaLanguage, 
  FaMapMarkerAlt, 
  FaExclamationTriangle, 
  FaMobileAlt, 
  FaGlobe, 
  FaRegLightbulb, 
  FaUsers 
} from "react-icons/fa";
function PrincipalPage() {
  return (
    <div>
      <Navbar />
      <Row className="g-0 rowPadre">
        <Col xs="12" className="colhijo">
          <h1>Conectando comunidades con</h1>
        </Col>
      </Row>

      <Row className="g-0 rowPadre2">
        <Col xs="auto" className="colhijo1">
          <h1>la salud en </h1>
        </Col>
        <Col xs="auto" className="colhijo2">
          <h1> Chiapas</h1>
        </Col>
      </Row>
      <Row className="g-0 rowPadre3">
        <h4>
          Una plataforma inteligente que entiende el lenguaje de las comunidades
          rurales para detectar tempranamente enfermedades endémicas y salvar
          vidas.
        </h4>
      </Row>

      <div className="parte2">
        <div style={{ padding: "5%" }}>
          <Row>
            <h1>Una brecha entre la comunidad y la salud</h1>
          </Row>
          <Row style={{ color: "var(--color-gris_oscuro)" }}>
            <h4>
              En muchas comunidades rurales de Chiapas, el primer paso para
              buscar ayuda médica es el más difícil: la comunicación.
            </h4>
          </Row>
          <Row>
            <Col>
              <CardReusable
                title="Salud Cardiaca"
                text="Cuida tu corazón con nuestros consejos"
                IconComponent={FaLanguage}
                buttonText="Ver más"
                onButtonClick={() => alert("Card 1")}
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default PrincipalPage;
