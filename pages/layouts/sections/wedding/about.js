import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const About = () => (
    <section className="wedding format">
        <Container>
            <Row>
                <Col md="8"  className="offset-md-2">
                    <div className="title">
                        <img alt="" className="img-fluid title-img"
                            src="/assets/images/wedding-img/bottom.png" />
                        <div className="main-title">
                            <h2 className="gradient-text">Meet Happy Couple</h2>
                        </div>
                        <div className="sub-title">
                            <p>A successful marriage requires falling in love many times, always with the same person.</p>
                        </div>
                    </div>
                </Col>
                <Col xl="4" md="6" className="offset-xl-2">
                    <img alt="" className="img-fluid about-img" src="/assets/images/wedding-img/t4kWPek.jpeg" />
                </Col>
                <Col xl="4" lg="6" md="6">
                    <div className="center-text">
                        <div>
                            <div className="format-small-text">
                                <h6># Love Bird</h6>
                            </div>
                            <div className="format-head-text">
                                <h3 className="about-font-header gradient-text">about</h3>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">
                                    <h6>#Vasudev + #Pooja = #Vasooja</h6> "On the day 24th September 2020 we engaged, lot's of happiness oh this day and lot's of beautiful memories."
                                </p>
                                <p className="about-para">
                                    <h6># Vasudev</h6> "I want to create lot's of beautiful memories and good  moments, beacuse i think beautiful memories and every bit of good moments are true hapiness of our life."
                                </p>
                                <p className="about-para">
                                    <h6># Pooja</h6> "I am a simple girl with good heart and too much addicted with education. Till now I am not travelled too much, because I want to travel with my husband and it's special for me."
                                </p>
                            </div>
                            {/* <a className=" btn btn-default btn-gradient text-white" href="#">read more</a> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default About;