import { Container, Row, Col } from "react-bootstrap";
import "../styles/Principal.css";
import Navbar from "../components/navbar";
import CardReusable from "../components/cardReusable";
import CardNumerada from "../components/carNumerada";
import {
  FaLanguage,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaMobileAlt,
  FaGlobe,
  FaRegLightbulb,
  FaUsers,
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
          <Row style={{ margin: "2%" }}>
            <Col>
              <CardReusable
                title="Barreras de lenguaje y cultura"
                text="Las comunidades usan expresiones locales como calor de cuerpo o dolor de huesos que no son entendidas por los sistemas médicos formales."
                IconComponent={FaLanguage}
              />
            </Col>
            <Col>
              <CardReusable
                title="Acceso físico limitado"
                text="Llegar a un centro de salud puede significar horas de viaje con transporte limitado y costoso, desincentivando la búsqueda de ayuda temprana."
                IconComponent={FaMapMarkerAlt}
              />
            </Col>
            <Col>
              <CardReusable
                title="Detección tardía de riesgos"
                text="Enfermedades como dengue, zika y chikungunya se diagnostican tarde, aumentando 
                complicaciones y propagación en la comunidad."
                IconComponent={FaExclamationTriangle}
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="parte3">
        <div style={{ padding: "5%" }}>
          <Row>
            <h1>Un ecosistema digital completo</h1>
          </Row>
          <Row style={{ color: "var(--color-gris_oscuro)" }}>
            <h4>
              Dos plataformas que trabajan juntas: una aplicación móvil para la
              comunidad y un panel web para nuestros administradores.
            </h4>
          </Row>
          <Row style={{ margin: "2%" }}>
            <Col>
              <Row>
                <CardNumerada
                  number={1}
                  title="Describe con tus Propias Palabras"
                  text="Interfaz conversacional donde puedes escribir o dictar cómo te sientes usando el lenguaje de todos los días."
                />
              </Row>
              <Row></Row>
              <Row></Row>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default PrincipalPage;
