import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import homeImage from './resources/img/home-image.JPG'
import contentImage from './resources/img/content-image.jpeg'

function App() {
  return (
    <>
      <div className="container-image-bottom">
        <img src={homeImage} alt="" />
      </div>
      <Container>
        <Row className="justify-content-start pt-5">
          <Col xs={6}><h1 className='mea-culpa-regular text-end'>Luisa</h1></Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto"><h2 className='mea-culpa-regular text-center'>- & -</h2></Col>
        </Row>
        <Row className="justify-content-end pb-5">
          <Col xs={6}><h1 className='mea-culpa-regular text-start'>Edinson</h1></Col>
        </Row>

        <Row className="justify-content-center pt-5">
          <Col xs="auto"><p className='text-center mea-culpa-regular '>Amar no es mirarse el uno al otro, es mirar juntos en la misma dirección</p></Col>
        </Row>

        <Row className="justify-content-center pt-1">
          <Col xs={6}><h2 className=' text-center mea-culpa-regular '>¡Nos casamos!</h2></Col>
        </Row>

        <Row className="justify-content-center pt-5">
          <Col  >
            <p className='text-center'>Con nuestro amor y la bendición de dios tenemos el honor de invitarte a nuestra boda</p>
          </Col>
        </Row>


        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'><h2>SÁBADO 28 DE JUNIO DE 2025</h2></Col>
        </Row>

      </Container>
      <div className="container-image-top">
        <div className="container-image-bottom">
          <img src={contentImage} alt="" />
        </div>
      </div>
      <Container>
        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'><h2 className='text-center mea-culpa-regular '>Ceremonia & Recepción</h2></Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto" className='justify-content-center'>5:30 PM</Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto" className='justify-content-center'><p className='text-center'>Hacienda la unión, jamundí, valle del cauca, CO</p></Col>
        </Row>
        <Row className="justify-content-center pt-1">
          <Col xs="auto" className='justify-content-center'>
            <Button variant="outline-primary" onClick={() => { window.open('https://maps.app.goo.gl/2iieVtKoAbpxtpTi9') }}>Ver ubicación</Button>
          </Col>
        </Row>


        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'>Hemos reservado</Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto" className='justify-content-center'><h3 className='text-center'>1</h3></Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto" className='justify-content-center'>Lugar en su honer</Col>
        </Row>
        <Row className="justify-content-center pt-3">
          <Col xs="auto" className='justify-content-center'><p className='text-center'>Agradecemos confirme su asistencia antes del 29 de marzo</p></Col>
        </Row>
        <Row className="justify-content-center pt-1">
          <Col xs="auto" className='justify-content-center'>
            <Button variant="outline-primary" onClick={() => { window.open('https://maps.app.goo.gl/2iieVtKoAbpxtpTi9') }}>
              Confirmar asistencia
            </Button>
          </Col>
        </Row>


        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'><h5>CÓDIGO DE VESTIMENTA</h5></Col>
        </Row>
        <Row className="justify-content-center pt-1">
          <Col xs="auto" className='justify-content-center'><p className='text-center'>Formal</p></Col>
        </Row>

        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'><h5>SOLO ADULTOS</h5></Col>
        </Row>
        <Row className="justify-content-center pt-1">
          <Col xs="auto" className='justify-content-center'><p className='text-center'>Aunque nos gustan los niños esta es una celebración para adultos</p></Col>
        </Row>


        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'><p className='text-center'>Esperamos contar con su presencia</p></Col>
        </Row>
        <Row className="justify-content-center pt-3">
          <Col xs="auto" className='justify-content-center'><h2 className='mea-culpa-regular'>¡Muchas gracias!</h2></Col>
        </Row>

      </Container>
    </>
  );

}



export default App;
