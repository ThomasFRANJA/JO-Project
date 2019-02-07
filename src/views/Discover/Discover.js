import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import './Discover.scss';
import data from '../../db/data';
import ogSingle from './../../assets/OG-single-02.svg';
import bgVideo from './../../assets/videos/1936-Men.mp4';

const handleScroll = () => {
    document.getElementById('discoverContainer');
    console.log('ahah');
};


const Discover = () => {

    const key = localStorage.getItem('key');


    return (
        <div id="discoverContainer" onWheel={handleScroll}>
            {/* Section 1 */}
            <section className="section">
                <Grid>
                    <Row middle="lg">
                        <Col lg={3} lgOffset={1} className="block-discover">
                            <div>
                                <span>{data.list[0][key].date}</span>
                            </div>
                            <div>
                                <h1 className="block-discover__title">{data.list[0][key].title}</h1>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>

            {/* Section 2 */}
            <section className="section">
                <Grid>
                    <Row middle="lg" center="lg">
                        <img className="bgCircle" src={ogSingle} alt="overlay"/>
                        <Col lg={6} lgOffset={4} className="block-discover">
                            <div>
                                <h1 className="block-discover__title">Type Something</h1>
                            </div>
                            <div>
                                <p className="block-discover__descriptif">{data.list[0][key].text}</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>

            {/* Section 3 */}
            <section className="section">
                <Grid>
                    <Row top="lg">
                        <img className="bgCircle-2" src={ogSingle} alt="overlay"/>
                        <Col lg={4} lgOffset={1} className="block-discover">
                            <h1 className="block-discover__title">Type Something</h1>
                            <p className="block-discover__descriptif">{data.list[0][key].text}</p>
                        </Col>

                        <Col lg={5} lgOffset={1} className="block-discover">
                            <div className="block-item"></div>
                        </Col>
                        <img className="bgCircle-3" src={ogSingle} alt="overlay"/>
                    </Row>
                </Grid>
            </section>

            {/* Section 4 PLAYER */}
            <section className="section">
                <Grid>
                    <Row>
                        <Col lg={12} className="block-discoverVideo">
                            <video width="100%" autoPlay={bgVideo} muted={bgVideo}>
                                <source src={bgVideo} type="video/mp4"/>
                            </video>
                            {/*<h1 className="block-discover__title">Player autocomplete</h1>*/}
                        </Col>
                    </Row>
                </Grid>
            </section>

            {/* Section 5 */}
            <section className="section">
                <Grid>
                    <Row top="lg">
                        <Col lg={5} lgOffset={1} className="block-discover">
                            <div className="block-item"></div>
                        </Col>
                        <Col lg={4} lgOffset={1} className="block-discover">
                            <h1 className="block-discover__title">Type Something</h1>
                            <p className="block-discover__descriptif">{data.list[0][key].text}</p>
                        </Col>
                        <img className="bgCircle-4" src={ogSingle} alt="overlay"/>
                    </Row>
                </Grid>
            </section>


            {/* Section 6 */}
            <section className="section">
                <Grid>
                    <Row center="lg">
                        <Col lg={8} className="block-discover">
                            <p className="block-discover__descriptif">{data.list[0][key].text}
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </section>
        </div>
    )
};

export default Discover;