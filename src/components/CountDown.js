import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

export default function CountDown() {

    // const [eventName, setEventName] = useState("");
    const [eventDate,] = useState("Sat Jun 28 2025 17:30:00 GMT-0500");
    // const [countdownStarted, setCountdownStarted] = useState(false);
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

    // const formatDate = (date) => {
    //     const options = { month: "long", day: "numeric", year: "numeric" };
    //     return new Date(date).toLocaleDateString("en-US", options);
    // };

    const formatTime = (time) => {
        // const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));


        return (
            <>
                <Row className="justify-content-center pt-1 pb-1">
                    <Col xs={3} className='justify-content-center'>
                        <div className='text-center time-counter-square abhaya-libre-medium'>
                            {days.toString().padStart(2, "0")}
                        </div>
                    </Col>
                    <Col xs={3} className='justify-content-center'>
                        <div className='text-center time-counter-square abhaya-libre-medium'>
                            {hours.toString().padStart(2, "0")}
                        </div>
                    </Col>
                    <Col xs={3} className='justify-content-center abhaya-libre-medium'>
                        <div className='text-center time-counter-square'>
                            {minutes.toString().padStart(2, "0")}
                        </div>
                    </Col>
                    {/* <Col xs={3} className='justify-content-center'>
                        <div className='text-center time-counter-square'>
                            {seconds.toString().padStart(2, "0")}
                        </div>
                    </Col> */}
                </Row>
            </>
        )
    };

    return (
        <>
            {formatTime(timeRemaining)}
            <Row className="justify-content-center pt-3 pb-3">
                <Col xs={3} className='justify-content-center'>
                    <div className='text-center abhaya-libre-medium'>
                        Dias
                    </div>
                </Col>
                <Col xs={3} className='justify-content-center'>
                    <div className='text-center abhaya-libre-medium'>
                        Horas
                    </div>
                </Col>
                <Col xs={3} className='justify-content-center'>
                    <div className='text-center abhaya-libre-medium'>
                        Minutos
                    </div>
                </Col>
                {/* <Col xs={3} className='justify-content-center'>
                    <div className='text-center'>
                        Segundos
                    </div>
                </Col> */}
            </Row>
        </>
    )
}
