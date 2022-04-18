import React from 'react';
import CountdownComponent from '../../../../containers/common/countdown'
import {Container,Row,Col} from 'reactstrap'
const Countdown = () => (
    <section className="wedding countdown-bg bg set-relative">
        <Container>
            <Row>
                <Col md="8" className="offset-md-2">
                    <div className="title">
                        <img alt="" className="img-fluid title-img"
                            src="/assets/images/wedding-img/bottom.png" />
                        <div className="main-title">
                            <h2 className="gradient-text">count down</h2>
                        </div>
                        <div className="sub-title">
                            <p>Everything around looks so bright and so lovely; guess why? Simply because we are getting married in days from now. We are so delighted. Thinking about how we’ll look together as a married couple gives me an amazing feeling that I love to wake up to each day to our big day. Countdown begins!</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl="8" className="offset-xl-2">
                    <div className="wedding-time ">
                        <div>
                            <div className="timimg-wedding">
                                <CountdownComponent />
                            </div>
                        </div>
                    </div>
                    <div className="schedule text-center">
                        <h3 className="m-b-15 zexson-text">
                            <i aria-hidden="true" className="fa fa-map-marker m-r-10"></i> B-18/19 Madhavi Apartments, Krishnanagar, Ahmedabad 382345
                    </h3>
                        <h4 className="schedule-date">
                            <i aria-hidden="true" className="fa fa-calendar m-r-10"></i>12<sup>th</sup> May 2022
                    </h4>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Countdown;