import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import React from 'react'

export default function ConfirmModal({ show, handleCloseModal }) {

    return (
        <Modal show={show} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Encuentra tu reserva</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleCloseModal}>
                    Cerrar
                </Button>
                <Button className="wedding-btn shadow" onClick={handleCloseModal}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

ConfirmModal.propTypes = {
    show: PropTypes.bool,
    handleCloseModal: PropTypes.func
}
