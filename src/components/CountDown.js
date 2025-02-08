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

    // const formatDate = (date) => {
    //     const options = { month: "long", day: "numeric", year: "numeric" };
    //     return new Date(date).toLocaleDateString("en-US", options);
    // };

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
                                {/* dd:hh:mm:ss */}
                                Días
                            </div>
                            <div className='text-center time-counter-square'>
                                {/* {`${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`} */}
                                {`${days.toString().padStart(2, "0")}`}
                            </div>
                        </Col>
                        <Col className='justify-content-center libre-baskerville-regular'>
                            <div className='text-center libre-baskerville-regular'>
                                {/* dd:hh:mm:ss */}
                                Horas
                            </div>
                            <div className='text-center time-counter-square'>
                                {hours.toString().padStart(2, "0")}
                            </div>
                        </Col>
                        <Col className='justify-content-center libre-baskerville-regular'>
                            <div className='text-center libre-baskerville-regular'>
                                {/* dd:hh:mm:ss */}
                                Minutos
                            </div>
                            <div className='text-center time-counter-square'>
                                {minutes.toString().padStart(2, "0")}
                            </div>
                        </Col>
                        <Col className='justify-content-center libre-baskerville-regular'>
                            <div className='text-center libre-baskerville-regular'>
                                {/* dd:hh:mm:ss */}
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

    // <Row className="justify-content-center pb-3 ">
    //             <Col xs={2} className='justify-content-center px-0'>
    //                 <div className='text-center libre-baskerville-regular'>
    //                     {/* dd:hh:mm:ss */}
    //                     dd
    //                 </div>
    //             </Col>
    //             <Col xs={2} className='justify-content-center px-0'>
    //                 <div className='text-center libre-baskerville-regular'>
    //                     hh
    //                 </div>
    //             </Col>
    //             <Col xs={2} className='justify-content-center px-0'>
    //                 <div className='text-center libre-baskerville-regular'>
    //                     mm
    //                 </div>
    //             </Col>
    //             <Col xs={2} className='justify-content-center px-0'>
    //                 <div className='text-center libre-baskerville-regular'>
    //                     ss
    //                 </div>
    //             </Col>
    //         </Row>

    return (
        <>
            {formatTime(timeRemaining)}
        </>
    )
}




