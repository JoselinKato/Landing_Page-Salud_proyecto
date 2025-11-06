import { Container, Row, Col } from "react-bootstrap";
import "../styles/Principal.css";
import Navbar from "../components/navbar";
import CardReusable from "../components/CardReusable";
import CardNumerada from "../components/carNumerada";
import CardIcons from "../components/CardIcons";
import Footer from "../components/Footer";
import {
  FaLanguage,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaMobileAlt,
  FaGlobe,
  FaRegLightbulb,
  FaUsers,
  FaCheckCircle,
  FaLaptop,
  FaChartLine,
} from "react-icons/fa";

function PrincipalPage() {
  return (
    <>
      <Navbar />
    <div className="main-content">
      <div className="hero-section" >
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
            Una plataforma inteligente que entiende el lenguaje de las
            comunidades rurales para detectar tempranamente enfermedades
            endémicas y salvar vidas.
          </h4>
        </Row>
      </div>

      <div id="servicios" className="parte2">
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
          <Row style={{ margin: "2%", justifyContent: "center", gap: "1rem" }}>
            <Col md={4} lg={3}>
              <div className="card-reusable-wrapper">
                <CardReusable
                  title="Barreras de lenguaje y cultura"
                  text="Las comunidades usan expresiones locales como calor de cuerpo o dolor de huesos que no son entendidas por los sistemas médicos formales."
                  IconComponent={FaLanguage}
                />
              </div>
            </Col>
            <Col md={4} lg={3}>
              <div className="card-reusable-wrapper">
                <CardReusable
                  title="Acceso físico limitado"
                  text="Llegar a un centro de salud puede significar horas de viaje con transporte limitado y costoso, desincentivando la búsqueda de ayuda temprana."
                  IconComponent={FaMapMarkerAlt}
                />
              </div>
            </Col>
            <Col md={4} lg={3}>
              <div className="card-reusable-wrapper">
                <CardReusable
                  title="Detección tardía de riesgos"
                  text="Enfermedades como dengue, zika y chikungunya se diagnostican tarde, aumentando complicaciones y propagación en la comunidad."
                  IconComponent={FaExclamationTriangle}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div id="plataforma" className="parte3">
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

          <Row className="card-header-row">
            <Col md={5}>
              <CardNumerada
                IconComponent={FaMobileAlt}
                title="Aplicación móvil"
                text="para la comunidad"
              />
            </Col>
            <Col md={5}>
              <CardNumerada
                IconComponent={FaLaptop}
                title="Plataforma web"
                text="para administradores"
              />
            </Col>
          </Row>

          <Row style={{ margin: "2%" }}>
            <Col md={6}>
              <Row>
                <div className="BordeCard">
                  <CardNumerada
                    number={1}
                    title="Describe con tus Propias Palabras"
                    text="Interfaz conversacional donde puedes escribir o dictar cómo te sientes usando el lenguaje de todos los días."
                  />
                </div>
              </Row>
              <Row>
                <div className="BordeCard">
                  <CardNumerada
                    number={2}
                    title="Mineria de datos"
                    text="PLN y Machine Learning interpretan tus descripciones e identifican patrones de riesgo de enfermedades."
                  />
                </div>
              </Row>
              <Row>
                <div className="BordeCard">
                  <CardNumerada
                    number={3}
                    title="Orientación inmediata"
                    text="Recibe un pre-diagnóstico probabilístico, nivel de urgencia y recomendaciones de autocuidado claras."
                  />
                </div>
              </Row>
            </Col>

            <Col md={6}>
              <div className="col-plataforma-web">
                <CardIcons
                  IconComponent={FaCheckCircle}
                  title="Vigilancia Epidemiológica"
                  text="Mapa de calor en tiempo real para detectar posibles brotes de enfermedades de manera temprana."
                />
                <CardIcons
                  IconComponent={FaCheckCircle}
                  title="Gestión del Conocimiento"
                  text="Administración del diccionario de términos coloquiales para mejorar la precisión del sistema."
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div id="impacto" className="parte4 impacto-section">
        <div style={{ padding: "5%" }}>
          <Row className="justify-content-center">
            <Col xs={12}>
              <h1>Impacto en nuestras comunidades</h1>
            </Col>
            <Col xs={10} md={8}>
              <h4 style={{ color: "var(--color-gris_oscuro)" }}>
                Este proyecto no es sólo una buena idea, es una intervención
                necesaria y viable.
              </h4>
            </Col>
          </Row>

          <Row style={{ margin: "2%", justifyContent: "center", gap: "2rem" }}>
            <Col md={5}>
              <div className="card-reusable-wrapper">
                <CardReusable
                  title="Impacto en la Salud Pública"
                  text="Chiapas enfrenta brotes anuales de enfermedades transmitidas por vector. La detección temprana comunitaria puede salvar vidas y reducir la carga sobre los servicios de salud."
                  IconComponent={FaChartLine}
                />
              </div>
            </Col>
            <Col md={5}>
              <div className="card-reusable-wrapper">
                <CardReusable
                  title="Relevancia Sociocultural"
                  text="Al entender y respetar el lenguaje de las personas, aumentamos la adopción y confianza. Empoderamos a las comunidades con orientación accesible en sus propios términos."
                  IconComponent={FaUsers}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}
export default PrincipalPage;