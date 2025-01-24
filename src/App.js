import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import logo from './resources/img/logo-boda.png'
import homeImage from './resources/img/home-image.jpeg'

function App() {
  return (
    <Container>
      <Row className="justify-content-center pt-3">
        <Col xs="auto"><h1 className='text-center'>Fuimos hechos para estar juntos...</h1></Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={8} sm={4} className='justify-content-center'>
          <img src={logo} alt="logo" className='w-100' />
        </Col>
      </Row>
      <Row className="justify-content-center pt-1">
        <Col xs="auto"><h2>¡NOS CASAMOS!</h2></Col>
      </Row>
      <Row className="justify-content-center pt-3">
        <Col xs={12} sm={8} className='justify-content-center'>
          <img src={homeImage} alt="logo" className='w-100' />
        </Col>
      </Row>
      <Row className="justify-content-center pt-5">
        <Col  >
          <p className='text-center'>Con nuestro amor y la bendición de Dios tenemos el honor de invitarte a nuestra boda.</p>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5">
        <Col xs="auto" className='justify-content-center'><h2>SÁBADO 28 DE JUNIO DE 2025</h2></Col>
      </Row>

      <Row className="justify-content-center pt-5">
        <Col xs="auto" className='justify-content-center'>5:30 PM</Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className='justify-content-center'>CEREMONIA & RECEPCIÓN</Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className='justify-content-center'>Hacienda la unión, Jamundí, Valle del Cauca, CO.</Col>
      </Row>
      <Row className="justify-content-center pt-3">
        <Col xs="auto" className='justify-content-center'>
        <Button variant="outline-primary" onClick={()=>{window.open('https://maps.app.goo.gl/2iieVtKoAbpxtpTi9')}}>Ver ubicación</Button>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5">
        <Col xs="auto" className='justify-content-center'>Hemos reservado</Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className='justify-content-center'><h3 className='text-center'>1</h3></Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className='justify-content-center'>Lugar en su honor</Col>
      </Row>
      <Row className="justify-content-center pt-3">
        <Col xs="auto" className='justify-content-center'>
          <Button variant="outline-primary" onClick={()=>{window.open('https://maps.app.goo.gl/2iieVtKoAbpxtpTi9')}}>
            Confirmar asistencia
            </Button>
        </Col>
      </Row>
      
      
    </Container>);
      
}



export default App;
