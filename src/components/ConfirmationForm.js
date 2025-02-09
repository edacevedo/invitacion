import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Select from 'react-select';
import Modal from 'react-bootstrap/esm/Modal';
import Spinner from 'react-bootstrap/Spinner'
import Logo from './Logo';
import guessJSON from './../domain/guess.json'

export default function ConfirmationForm() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [inputText, setInputText] = useState('')
    const [guessName, setGuessName] = useState('')
    const [guessList, setGuessList] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false)


    // const getData = () => {
    //     fetch('./guess.json'
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             console.log(response)
    //             return response.json();
    //         })
    // }

    useEffect(() => {
        console.log(guessJSON.guessList);

        setGuessList(guessJSON.guessList)
    }, [])

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
            <Row className='mt-5'>
                <Col>
                    <p className='text-center secondary-color'>Tenemos <span className='bold'>1</span> reserva a tu nombre, encuéntrala ingresando tu nombre. </p>
                </Col>
            </Row>
            <Row className="justify-content-center mt-1">
                <Col sm={6}>
                    <Select

                        isClearable
                        isSearchable
                        placeholder={'Ingresa tu nombre aquí'}
                        defaultValue={selectedOption}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        onInputChange={(value) => {
                            setInputText(value)
                        }}
                        options={
                            inputText ?
                                [...guessList].filter(opt => opt.value.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())) :
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
                                <span className="visually-hidden">Confirmando...</span>
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
                    <Modal.Title className='abhaya-libre-medium  ft-s-2'>Asistencia confirmada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div className='ft-s-7 imperial-script-regular text-center'>
                            {`${guessName}`}
                        </div>
                        <br />
                        <p className='text-center secondary-color'>
                            {` Valoramos tu presencia y estamos muy felices de que hayas decidido acompañarnos en nuestra boda.`}
                        </p>
                        <p className='text-center secondary-color'>
                            {`¡Nos vemos muy pronto!`}
                        </p>
                        <Logo />
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='wedding-btn shadow' onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
