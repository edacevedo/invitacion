import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import homeImage from './resources/img/home-image.JPG'
import welcomeImage from './resources/img/welcome-image.jpeg'
import contentImage from './resources/img/content-image.jpeg'
import womenDress from './resources/img/women-dress.png'
import menDress from './resources/img/men-dress.png'
import loveLetter from './resources/img/love-letter.png'

import CountDown from './components/CountDown';
import ConfirmationForm from './components/ConfirmationForm';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <div className="container-image-top">
        <div className="container-image-bottom">
          <img src={welcomeImage} alt="" />
        </div>
      </div>
      <Container className='px-7'>
        <Row className="justify-content-start pt-1">
          <Col xs={6}>
            <div className='imperial-script-regular text-end ft-s-10 max-h-3'>Luisa</div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <div className='mea-culpa-regular text-center ft-s-10 max-h-3'>&</div>
          </Col>
        </Row>
        <Row className="justify-content-end pb-3">
          <Col xs={6}>
            <div className='imperial-script-regular text-start ft-s-10 name-container'><div>Edinson</div></div>
          </Col>
        </Row>

        <Row className="justify-content-center pt-3">
          <Col xs="auto">
            <p className='text-center libre-baskerville-regular secondary-color'>
              Nos escogimos el uno al otro para amarnos por el
              resto de nuestras vidas.
            </p></Col>
        </Row>

        <Row className="justify-content-center pt-1">
          <Col xs="auto"><p className='text-center libre-baskerville-regular secondary-color'>
            Después de recorrer muchos lugares juntos y
            compartir momentos inolvidables, llegó el gran día!
          </p></Col>
        </Row>

        <Row className="justify-content-center pt-1 pb-3">
          <Col xs={12}><h2 className='imperial-script-regular text-center'>¡Nos casamos!</h2></Col>
        </Row>

        <Row className="justify-content-center pt-1">
          <Col  >
            <p className='text-center libre-baskerville-regular secondary-color'>
              Comenzamos una nueva aventura y no sería posible
              celebrar nuestra boda sin la compañía de nuestra
              familia y grandes amigos.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'>
            <p className='text-center libre-baskerville-regular secondary-color'>
              ALISTA TU MEJOR PINTA,<br />
              QUE SÓLO FALTAN...
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
      <Container className='px-7'>
        <Row className="justify-content-center pt-3">
          <Col xs="auto" className='justify-content-center'>
            <h2 className='text-center imperial-script-regular'>Ceremonia y Recepción</h2>
          </Col>
        </Row>

        <Row className="justify-content-center pt-3">
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

        <Row className="justify-content-center">
          <Col xs="auto" className='justify-content-center'>
            <p className='text-center libre-baskerville-regular'>
              Hacienda La Unión, <br />
              Jamundí, Valle del Cauca
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs="auto" className='justify-content-center'>
            <h3 className='abhaya-libre-regular'>5:00 p.m.</h3>
          </Col>
        </Row>

        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'>
            <Button className="wedding-btn shadow" onClick={() => { window.open('https://maps.app.goo.gl/2iieVtKoAbpxtpTi9') }}>Ver ubicación</Button>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center pt-5">
          <Col xs={12} className='justify-content-center'>
            <p className='text-center libre-baskerville-regular secondary-color'>
              Esperamos que puedas acompañarnos. <br />

              Respetamos tu tiempo y el de los demás, por lo cual
              procuraremos dar inicio a la hora indicada.
            </p>
          </Col>
        </Row>

      </Container >
      <div className='justify-content-center dress-code-title imperial-script-regular mt-5 mb-5'>
        Código de vestimenta
      </div>
      <Container className='px-7'>

        <Row className="justify-content-center align-items-center">
          <Col xs={3} sm={2} className='justify-content-center'>
            <img className="w-100" src={menDress} alt="" />
            <div className='text-center imperial-script-regular ft-s-2'>Caballeros</div>
          </Col>
          <Col xs={3} sm={2} className='justify-content-center'>
            <img className="w-100" src={womenDress} alt="" />
            <div className='text-center imperial-script-regular ft-s-2'>Damas</div>
          </Col>
          <Col xs={6} sm={8} className='justify-content-center'>
            <p className='text-center libre-baskerville-regular secondary-color'>
              Nos encantará verte formal, <br />
              por eso ellos traje deberán
              usar y ellas vestidos largos
              llevarán...
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center pt-3">
          <Col xs={12} className='justify-content-center'>
            <p className='text-center libre-baskerville-regular secondary-color'>
              **El blanco se reserva para la
              novia.**
            </p>
          </Col>
        </Row>

      </Container>

      <div className="container-image-top">
        <div className="container-image-bottom">
          <img src={homeImage} alt="" />
        </div>
      </div>

      <Container className='px-7'>

        <Row className="justify-content-center align-items-center mt-5">
          <Col xs={12} className='justify-content-center'>
            <p className='text-center imperial-script-regular paragraph'>
              “El amor nunca se da por vencido, jamás
              pierde la fe, siempre tiene esperanzas y se
              mantiene firme en toda circunstancia.”
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center mt-3">
          <Col xs={6} sm={10} className='justify-content-center'>
            <p className='text-center secondary-color m-0'>
              Ya tenemos pensado el Ferrari, la
              mansión y el velero.
              Ahora lo único que nos falta es el
              dinero...
            </p>
          </Col>
          <Col xs={6} sm={2} className='justify-content-center'>
            <img className="w-50 letter-img" src={loveLetter} alt="" />
            <div className='text-center imperial-script-regular ft-s-2'>
              Lluvia de sobres
            </div>
          </Col>
        </Row>
      </Container>

      <div className='justify-content-center dress-code-title imperial-script-regular mt-5 mb-3'>
        Confírmanos tu asistencia
      </div>

      <Container className='px-7'>


        <ConfirmationForm />
        {/* <Row className="justify-content-start pt-5">
          <Col xs={6}>
            <div className='imperial-script-regular text-end ft-s-10 max-h-3'>L</div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <div className='mea-culpa-regular text-center ft-s-10 max-h-3'>&</div>
          </Col>
        </Row>
        <Row className="justify-content-end pb-3">
          <Col xs={6}>
            <div className='imperial-script-regular text-start ft-s-10 name-container'><div>E</div></div>
          </Col>
        </Row> */}
        <Logo />

        <Row className="justify-content-center">
          <Col xs="auto">
            <div className='libre-baskerville-regular text-center ft-s-2 max-h-3'>28.06.25</div>
          </Col>
        </Row>

      </Container >

    </>
  );

}



export default App;
