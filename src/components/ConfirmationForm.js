import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Select from 'react-select';
import { Alert } from 'bootstrap';

export default function ConfirmationForm() {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'Luisa María Roser Valencia', label: 'Luisa María Roser Valencia' },
    ];

    const onSubmitConfirmation = () => {
        axios.get(
            'https://script.google.com/macros/s/AKfycbyZSJ4GcQLRl88ysB4KtWYfk6Wg5TTdPz-VczWDQU9B0L7nUe4whvtjwMIVm0YnxbyY/exec',
            {
                params: {
                    date: new Date(),
                    name: selectedOption['value']
                }
            }
        ).then(resp => {
            Alert(resp.data)
        });
    }
    return (

        <>
            <Row className="justify-content-center mt-5">
                <Select
                    isClearable
                    isSearchable
                    placeholder={'Ingresa tu nombre'}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </Row>
            <Row className="justify-content-center mt-3">
                <Col xs="auto" className='justify-content-center'>
                    <Button
                        className="wedding-btn shadow"
                        disabled={!selectedOption}
                        onClick={() => { onSubmitConfirmation() }}>
                        Confirmar
                    </Button>
                </Col>
            </Row>
        </>

    )
}
