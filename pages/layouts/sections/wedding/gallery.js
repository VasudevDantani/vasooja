import React, { useState } from 'react';
import Masonry from 'react-masonry-css'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { AllImgData, DesignImgData, GraphicsImgData, BrandingImgData, PhotoGraphyImgData } from '../../../../database/layouts/wedding/database';
import {Container,Row,Col} from 'reactstrap'
const Gallery = () => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <section className="wedding portfolio-section zoom-gallery">
            <Container>
                <Row>
                    <Col md="8"  className="offset-md-2">
                        <div className="title">
                            <img alt="" className="img-fluid title-img"
                                src="/assets/images/wedding-img/bottom.png" />
                            <div className="main-title">
                                <h2 className="gradient-text">beautiful memories</h2>
                            </div>
                            <div className="sub-title">
                                <p>One of the best ways to make yourself happy in the present is to recall happy times from the past. Photos are a great memory-prompt, and because we tend to take photos of happy occasions, they weight our memories to the good.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* <Row>
                    <Col xs="12" className="filter-section">
                        <Nav className="filter-container isotopeFilters">
                            <NavItem className="list-inline filter">
                                <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                    All
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                    DESIGN
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                    GRAPHICS
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={activeTab == '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                    BRANDING
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={activeTab == '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                                    PHOTOGRAPHY
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row> */}
                <TabContent className="isotopeContainer" activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Masonry breakpointCols={3} className="my-masonry-grid row" columnClassName="my-masonry-grid_column col-lg-4 col-md-6 col-12">
                            {AllImgData.map((imgItem, i) => {
                                return (
                                    <div className="isotopeSelector" key={i}>
                                        <div className="overlay">
                                            <div className="border-portfolio">
                                                <a className="zoom_gallery" data-source=""
                                                    href={imgItem.img} title="">
                                                    <div className="overlay-background">
                                                        <i aria-hidden="true" className="fa fa-plus"></i>
                                                    </div>
                                                    <img alt="" className="img-fluid blur-up" src={imgItem.img} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Masonry>
                    </TabPane>
                    {/* <TabPane tabId="2">
                        <Masonry breakpointCols={3} className="my-masonry-grid row" columnClassName="my-masonry-grid_column col-lg-4 col-md-6 col-12">
                            {DesignImgData.map((imgItem, i) => {
                                return (
                                    <div className="isotopeSelector" key={i}>
                                        <div className="overlay">
                                            <div className="border-portfolio">
                                                <a className="zoom_gallery" data-source=""
                                                    href={imgItem.img} title="">                                       
                                                    <img alt="" className="img-fluid blur-up" src={imgItem.img} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Masonry>
                    </TabPane>
                    <TabPane tabId="3">
                        <Masonry breakpointCols={3} className="my-masonry-grid row" columnClassName="my-masonry-grid_column col-lg-4 col-md-6 col-12">
                            {GraphicsImgData.map((imgItem, i) => {
                                return (
                                    <div className="isotopeSelector" key={i}>
                                        <div className="overlay">
                                            <div className="border-portfolio">
                                                <a className="zoom_gallery" data-source=""
                                                    href={imgItem.img} title="">
                                        
                                                    <img alt="" className="img-fluid blur-up" src={imgItem.img} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Masonry>
                    </TabPane>
                    <TabPane tabId="4">
                        <Masonry breakpointCols={3} className="my-masonry-grid row" columnClassName="my-masonry-grid_column col-lg-4 col-md-6 col-12">
                            {BrandingImgData.map((imgItem, i) => {
                                return (
                                    <div className="isotopeSelector" key={i}>
                                        <div className="overlay">
                                            <div className="border-portfolio">
                                                <a className="zoom_gallery" data-source=""
                                                    href={imgItem.img} title="">
                                        
                                                    <img alt="" className="img-fluid blur-up" src={imgItem.img} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Masonry>
                    </TabPane>
                    <TabPane tabId="5">
                        <Masonry breakpointCols={3} className="my-masonry-grid row" columnClassName="my-masonry-grid_column col-lg-4 col-md-6 col-12">
                            {PhotoGraphyImgData.map((imgItem, i) => {
                                return (
                                    <div className="isotopeSelector " key={i}>
                                        <div className="overlay">
                                            <div className="border-portfolio">
                                                <a className="zoom_gallery" data-source=""
                                                    href={imgItem.img} title="">
                                                    <img alt="" className="img-fluid blur-up" src={imgItem.img} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Masonry>
                    </TabPane> */}
                </TabContent>
            </Container>
        </section>
    )
}


export default Gallery;