import React from 'react';
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

const leftClick = () => {
    const clickLeft = document.getElementsByClassName('discoverPrevious');

    if (clickLeft[0].textContent === '1936') {
        localStorage.setItem('key', '1936')
    }

    if (clickLeft[0].textContent === '1968') {
        localStorage.setItem('key', '1968')
    }

    if (clickLeft[0].textContent === '1972') {
        localStorage.setItem('key', '1972')
    }

    if (clickLeft[0].textContent === '2008') {
        localStorage.setItem('key', '2008')
    }

    if (clickLeft[0].textContent === '2016') {
        localStorage.setItem('key', '2016')
    }

    if (clickLeft[0].textContent === '2024') {
        localStorage.setItem('key', '2024')
    }

        window.location.reload();
        window.scrollTo(0, 0);
}

const rightClick = () => {
    const clickRight = document.getElementsByClassName('discoverNext');

    if (clickRight[0].textContent === '1936') {
        localStorage.setItem('key', '1936')
    }

    if (clickRight[0].textContent === '1968') {
        localStorage.setItem('key', '1968')
    }

    if (clickRight[0].textContent === '1972') {
        localStorage.setItem('key', '1972')
    }

    if (clickRight[0].textContent === '2008') {
        localStorage.setItem('key', '2008')
    }

    if (clickRight[0].textContent === '2016') {
        localStorage.setItem('key', '2016')
    }

    if (clickRight[0].textContent === '2024') {
        localStorage.setItem('key', '2024')
    }

    window.location.reload();
    window.scrollTo(0, 0);
}


const Discover = () => {

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
                                    onClick={leftClick}
                                    className='discoverPrevious'
                                    >
                                    {
                                        key === '1936' ? '1936' : '' ||
                                        key === '1968' ? '1936' : '' ||
                                        key === '1972' ? '1968' : '' ||
                                        key === '2008' ? '1972' : '' ||
                                        key === '2016' ? '2008' : '' ||
                                        key === '2024' ? '2016' : ''
                                    }
                                    </button>
                            </div>

                            <div className="block-discoverLinkRight">
                                <img src={bgRight} alt=""/>
                                <button
                                    onClick={rightClick}
                                    className='discoverNext'
                                    >
                                    {
                                        key === '1936' ? '1968' : '' ||
                                        key === '1968' ? '1972' : '' ||
                                        key === '1972' ? '2008' : '' ||
                                        key === '2008' ? '2016' : '' ||
                                        key === '2016' ? '2024' : '' ||
                                        key === '2024' ? '2024' : ''
                                    }
                                </button>
                            </div>
                        </div>
                    </Row>
                </Grid>
            </section>
        </div>
    )
};

export default Discover;