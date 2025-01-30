import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import homeImage from './resources/img/home-image.JPG'
import contentImage from './resources/img/content-image.jpeg'
import CountDown from './components/CountDown';

function App() {
  return (
    <>
      <div className="container-image-bottom">
        <img src={homeImage} alt="" />
      </div>
      <Container>
        <Row className="justify-content-start pt-1">
          <Col xs={6}><h1 className='imperial-script-regular text-end'>Luisa</h1></Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto"><h2 className='mea-culpa-regular text-center'>- & -</h2></Col>
        </Row>
        <Row className="justify-content-end pb-5">
          <Col xs={6}><h1 className='imperial-script-regular text-start'>Edinson</h1></Col>
        </Row>

        <Row className="justify-content-center pt-3">
          <Col xs="auto">
            <p className='text-center abhaya-libre-regular'>
              Nos escogimos el uno al otro para amarnos por el
              resto de nuestras vidas.
            </p></Col>
        </Row>

        <Row className="justify-content-center pt-1">
          <Col xs="auto"><p className='text-center abhaya-libre-regular'>
            Después de recorrer muchos lugares juntos y
            compartir momentos inolvidables, llegó el gran día!
          </p></Col>
        </Row>

        <Row className="justify-content-center pt-1 pb-3">
          <Col xs={12}><h2 className='imperial-script-regular text-center'>Nos casamos!</h2></Col>
        </Row>

        <Row className="justify-content-center pt-1">
          <Col  >
            <p className='text-center abhaya-libre-regular'>
              Comenzamos una nueva aventura y no seria posible
              celebrar nuestra boda sin la compañía de nuestra
              familia y grandes amigos.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'>
            <p className='text-center abhaya-libre-medium'>
              ALISTA TU MEJOR PINTA,
              POR QUE SOLO FALTAN
            </p>
          </Col>
        </Row>

        <CountDown />

      </Container>
      <div className="container-image-top">
        <div className="container-image-bottom">
          <img src={contentImage} alt="" />
        </div>
      </div>
      <Container>
        <Row className="justify-content-center pt-3">
          <Col xs="auto" className='justify-content-center'><h2 className='text-center imperial-script-regular'>Ceremonia y Recepción</h2></Col>
        </Row>
        {/* <Row className="justify-content-center mt-1">
          <Col xs="auto" className='justify-content-center abhaya-libre-extrabold'><h2>Junio</h2></Col>
        </Row> */}
        <Row className="justify-content-center">
          <Col xs={12} className='justify-content-center d-flex align-content-center'>
            <svg width="200" height="50">
              <defs>
                <path id="curve" d="M 50,50 Q 300,-50 500,850" fill="transparent" />
              </defs>
              <text fill="black" >
                <textPath href="#curve" className='date-month abhaya-libre-bold'>
                  Junio
                </textPath>
              </text>
            </svg>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={4} className='justify-content-center align-content-center'><div className='text-center abhaya-libre-bold date-weekday'>Sábado</div></Col>
          <Col xs={4} className='justify-content-center'><div className='text-center abhaya-libre-extrabold date-day'>28</div></Col>
          <Col xs={4} className='justify-content-center align-content-center'><div className='text-center abhaya-libre-bold date-year'>2025</div></Col>
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

      </Container >
    </>
  );

}



export default App;
