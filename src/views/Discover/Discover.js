import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import './Discover.scss';
import data from '../../db/data';
import ogSingle from './../../assets/OG-single-02.svg';
import bgVideo from './../../assets/videos/1936-Men.mp4';
import bgLeft from './../../assets/Circle-bottom-left.svg';
import bgRight from './../../assets/Circle-bottom-right.svg';
import  Header              from    '../../components/Header/Header';

const handleScroll = () => {
    document.getElementById('discoverContainer');
    console.log('ahah');
};


class Discover extends Component {

    state = {
        key: this.props.location.state.key,
        previousDate: "",
        nextDate: ""
    }
    
    componentDidMount() {
        if (this.state.key === "1936") {
            console.log('inside if', this.state);
            this.setState({
                previousDate: "1936",
                nextDate: "1968"
            });
        }

        if (this.state.key === "1968") {
            this.setState({
                previousDate: "1936",
                nextDate: "1972"
            });
        }

        if (this.state.key === "1972") {
            this.setState({
                previousDate: "1968",
                nextDate: "2008"
            });
        }

        if (this.state.key === "2008") {
            this.setState({
                previousDate: "1972",
                nextDate: "2016"
            });
        }

        if (this.state.key === "2016") {
            this.setState({
                previousDate: "2008",
                nextDate: "2024"
            });
        }

        if (this.state.key === "2024") {
            this.setState({
                previousDate: "2016",
                nextDate: "2024"
            });
        }
    }
    render() {

        console.log('Props:', this.props);
        
        console.log('State : ', this.state);

        const { previousDate, nextDate } = this.state;
        
        
        const key = localStorage.getItem('key');

        return (
            <div id="discoverContainer" onWheel={handleScroll}>
                {/* Section 1 */}
                <section className="section">
                    <Header />
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

                            <div className='block-discover-link-container'>
                                <div className="block-discoverLinkLeft">
                                    <img src={bgLeft} alt=""/>
                                    <button
                                        onClick={() => this.setState({
                                                key: previousDate
                                            })
                                        }
                                        >{previousDate}</button>
                                </div>

                                <div className="block-discoverLinkRight">
                                    <img src={bgRight} alt=""/>
                                    <button
                                        onClick={() => this.setState({
                                                key: nextDate
                                            })
                                        }
                                        >{nextDate}</button>
                                </div>
                            </div>
                        </Row>
                    </Grid>
                </section>
            </div>
        );
    };
}

export default Discover;