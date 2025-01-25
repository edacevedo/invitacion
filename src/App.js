import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// import logo from './resources/img/logo-boda.png'
import homeImage from './resources/img/home-image.jpeg'
// import verticalFlowers from './resources/img/vertical-flowers.PNG'
// import cornerFlowers from './resources/img/corner-flowers.PNG'

function App() {
  return (
    <>
      <div class="container-image">
        <img src={homeImage} alt="" />
      </div>
      {/* <img src={homeImage} alt="logo" className='w-100 home-image' /> */}
      <Container>

        {/* <div className='vertical-flowers'>
          <img  className src={verticalFlowers} alt="" />
      </div> */}
        {/* <div className='corner-flowers'>
        <img  className src={cornerFlowers} alt="" />
      </div> */}

        <Row className="justify-content-start pt-5">
          <Col xs={6}><h1 className='mea-culpa-regular text-end'>Luisa</h1></Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto"><h1 className='mea-culpa-regular text-center'>- & -</h1></Col>
        </Row>
        <Row className="justify-content-end pb-5">
          <Col xs={6}><h1 className='mea-culpa-regular text-start'>Edinson</h1></Col>
        </Row>

        <Row className="justify-content-center pt-5">
          <Col xs="auto"><h6 className='text-center'>AMAR NO ES MIRARSE EL UNO AL OTRO, ES MIRAR JUNTOS EN LA MISMA DIRECCIÓN</h6></Col>
        </Row>

        <Row className="justify-content-center pt-1">
          <Col xs="auto"><h4>¡NOS CASAMOS!</h4></Col>
        </Row>

        {/* <Row className="justify-content-center pt-3">
          <Col xs={12} sm={8} className='justify-content-center'>
            <img src={homeImage} alt="logo" className='w-100' />
          </Col>
        </Row> */}


        <Row className="justify-content-center pt-5">
          <Col  >
            <p className='text-center'>CON NUESTRO AMOR Y LA BENDICIÓN DE DIOS TENEMOS EL HONOR DE INVITARTE A NUESTRA BODA</p>
          </Col>
        </Row>


        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'><h2>SÁBADO 28 DE JUNIO DE 2025</h2></Col>
        </Row>


        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'><h4 className='text-center'>5:30 PM</h4></Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto" className='justify-content-center'>CEREMONIA & RECEPCIÓN</Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto" className='justify-content-center'><p className='text-center'>HACIENDA LA UNIÓN, JAMUNDÍ, VALLE DEL CAUCA, CO.</p></Col>
        </Row>
        <Row className="justify-content-center pt-1">
          <Col xs="auto" className='justify-content-center'>
            <Button variant="outline-primary" onClick={() => { window.open('https://maps.app.goo.gl/2iieVtKoAbpxtpTi9') }}>Ver ubicación</Button>
          </Col>
        </Row>


        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'>HEMOS RESERVADO</Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto" className='justify-content-center'><h3 className='text-center'>1</h3></Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto" className='justify-content-center'>LUGAR EN SU HONOR</Col>
        </Row>
        <Row className="justify-content-center pt-3">
          <Col xs="auto" className='justify-content-center'><p className='text-center'>AGRADECEMOS CONFIRME SU ASISTENCIA ANTES DEL 29 DE MARZO</p></Col>
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
          <Col xs="auto" className='justify-content-center'><p className='text-center'>FORMAL</p></Col>
        </Row>

        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'><h5>SIN NIÑOS</h5></Col>
        </Row>
        <Row className="justify-content-center pt-1">
          <Col xs="auto" className='justify-content-center'><p className='text-center'>AUNQUE NOS GUSTAN LOS NIÑOS ESTA ES UNA CELEBRACIÓN PARA ADULTOS</p></Col>
        </Row>


        <Row className="justify-content-center pt-5">
          <Col xs="auto" className='justify-content-center'><p className='text-center'>ESPERAMOS CONTAR CON SU PRESENCIA</p></Col>
        </Row>
        <Row className="justify-content-center pt-3">
          <Col xs="auto" className='justify-content-center'><h2 className='mea-culpa-regular'>¡Muchas gracias!</h2></Col>
        </Row>

      </Container>
    </>
  );

}



export default App;
