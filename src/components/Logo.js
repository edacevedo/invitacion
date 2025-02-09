import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Logo() {
    return (
        <>
            <Row className="justify-content-start pt-1">
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
            </Row>
        </>
    )
}
