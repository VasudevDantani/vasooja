import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Banner = () => (
    <section className="wedding banner jenny-bg bg set-relative">
        <Container>
            <Row>
                <Col xs="12">
                    <div className="text-center">
                        <div className="wedding-banner">
                            <div className="set-relative rightFadeInOut">
                                <img alt="" className="img-fluid frem" src="/assets/images/wedding-img/jeny/frem.png" />
                            </div>
                            <div className="abs-center">
                                <div className="text-container">
                                    <div className="couple-text">
                                        <h2 className="banner-text gradient-text">Pooja</h2>
                                        <h2 className="banner-text gradient-text small">&</h2>
                                        <h2 className="banner-text gradient-text">Vasudev</h2>
                                    </div>
                                    <div>
                                        <h3 className="text-uppercase place">Ahmedabad</h3>
                                        <h4 className="address">B-18 Madhavi Appartments Krishnanagar</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Banner;