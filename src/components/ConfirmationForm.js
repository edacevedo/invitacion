import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Select from 'react-select';
import Modal from 'react-bootstrap/esm/Modal';
import Spinner from 'react-bootstrap/Spinner'

export default function ConfirmationForm() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [inputText, setInputText] = useState('')
    const [guessName, setGuessName] = useState('')
    const options = [
        { value: 'Martha Ivana Valencia Arango', label: 'Martha Ivana Valencia Arango' },
        { value: 'Flor de María Lopéz Jaimes', label: 'Flor de María Lopéz Jaimes' },
        { value: 'Hernán Valencia García', label: 'Hernán Valencia García' },
        { value: 'Carlos Contreras Contreras', label: 'Carlos Contreras Contreras' },
    ];
    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false)

    const handleCloseModal = () => {
        setShowModal(false)
        setGuessName('')
    };

    const onSubmitConfirmation = () => {
        var name = `${selectedOption['value']}`
        setGuessName(name)
        setSelectedOption(null)
        setShowSpinner(true)
        axios.get(
            'https://script.google.com/macros/s/AKfycbyZSJ4GcQLRl88ysB4KtWYfk6Wg5TTdPz-VczWDQU9B0L7nUe4whvtjwMIVm0YnxbyY/exec',
            {
                params: {
                    date: new Date(),
                    name: name
                }
            }
        ).then(resp => {
            console.log(resp.data);
            setShowModal(true)
        }).finally(() => {
            setSelectedOption(null)
            setShowSpinner(false)
        });
    }
    return (

        <>
            <Row className="justify-content-center mt-5">
                <Col sm={6}>
                    <Select

                        isClearable
                        isSearchable
                        placeholder={'Ingresa tu nombre'}
                        defaultValue={selectedOption}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        onInputChange={(value) => {
                            setInputText(value)
                        }}
                        options={
                            inputText ?
                                [...options].filter(opt => opt.value.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())) :
                                []
                        }
                        noOptionsMessage={() => 'Encuentra tu reserva.'}
                    />
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col xs="auto" className='justify-content-center'>
                    {
                        showSpinner ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> :
                            <Button
                                className="wedding-btn shadow"
                                disabled={!selectedOption}
                                onClick={() => { onSubmitConfirmation() }}>
                                Confirmar
                            </Button>
                    }
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='imperial-script-regular  ft-s-7'>Asistencia confirmada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div className='ft-s-7 imperial-script-regular text-center'>
                            {`${guessName}`}
                        </div>
                        <br />
                        <p className='text-center bold'>
                            {` Valoramos tu presencia y estamos muy felices de que hayas decidido acompañarnos en nuestra boda.`}
                        </p>
                        <p className='text-center'>
                            {`¡Nos vemos muy pronto!`}
                        </p>
                        <p className='text-center imperial-script-regular ft-s-10'>
                            {`Luisa   &  Edinson`}
                        </p>
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='wedding-btn shadow' onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>

    )
}
