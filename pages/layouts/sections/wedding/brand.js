import React from 'react';
import Slider from 'react-slick';
 
import { BrandData } from '../../../../database/layouts/wedding/database';
import {Container,Row,Col} from 'reactstrap'
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 320,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 420,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 1199,
            settings: { slidesToShow: 4 }
        }
    ]
};


const Brand = () => (
    <section className="wedding brand-sliders">
        <Container>
            <Row>
                <Col md="8" className="offset-md-2">
                    <div className="title">
                        <img alt="" className="img-fluid title-img"
                            src="/assets/images/wedding-img/bottom.png" />
                        <div className="main-title">
                            <h2 className="gradient-text">invitee</h2>
                        </div>
                        <div className="sub-title">
                            <p>"With warm heart we are invite you all, make our ceremony delighful and memorable with your presence" - Dantani Family</p>
                        </div>
                    </div>
                </Col>

                <Col xs="12">
                    <Slider className="owl-carousel owl-theme brand-slider" id="brand-slider" {...settings}>
                        {BrandData.map((item, i) => {
                            return (
                                <div className="item" key={i}>
                                    <h4>{item.invitee}</h4>
                                    {/* <a href="#"> */}
                                        {/* <img alt="" className="img-fluid wedding-brand" src={item.img} /> */}
                                    {/* </a> */}
                                </div>
                            )
                        })}
                    </Slider>
                </Col>
            </Row>
            <div>
            </div>
        </Container>
    </section>
)

export default Brand;