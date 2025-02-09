import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

export default function CountDown() {
    const [eventDate,] = useState("Sat Jun 28 2025 17:00:00 GMT-0500");
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        if (eventDate) {
            const countdownInterval = setInterval(() => {
                const currentTime = new Date().getTime();
                const eventTime = new Date(eventDate).getTime();
                let remainingTime = eventTime - currentTime;

                if (remainingTime <= 0) {
                    remainingTime = 0;
                    clearInterval(countdownInterval);
                    alert("Countdown complete!");
                }

                setTimeRemaining(remainingTime);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [eventDate, timeRemaining]);

    const formatTime = (time) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));


        return (
            <>
                <Row className="justify-content-center pt-3 pb-5">
                    <div className='col-xs-8 col-lg-8 d-flex justify-content-center count-down-container'>
                        <Col className='justify-content-center libre-baskerville-regular'>
                            <div className='text-center libre-baskerville-regular'>
                                Días
                            </div>
                            <div className='text-center time-counter-square'>
                                {`${days.toString().padStart(2, "0")}`}
                            </div>
                        </Col>
                        <Col className='justify-content-center libre-baskerville-regular'>
                            <div className='text-center libre-baskerville-regular'>
                                Horas
                            </div>
                            <div className='text-center time-counter-square'>
                                {hours.toString().padStart(2, "0")}
                            </div>
                        </Col>
                        <Col className='justify-content-center libre-baskerville-regular'>
                            <div className='text-center libre-baskerville-regular'>
                                Minutos
                            </div>
                            <div className='text-center time-counter-square'>
                                {minutes.toString().padStart(2, "0")}
                            </div>
                        </Col>
                        <Col className='justify-content-center libre-baskerville-regular'>
                            <div className='text-center libre-baskerville-regular'>
                                Segundos
                            </div>
                            <div className='text-center time-counter-square'>
                                {seconds.toString().padStart(2, "0")}
                            </div>
                        </Col>
                    </div>
                </Row>
            </>
        )
    };

    return (
        <>
            {formatTime(timeRemaining)}
        </>
    )
}




