import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Grid, Row, Col} from 'react-flexbox-grid';
import '../../styles/Description-JO.scss';
import TimeLine from "../TimeLine/TimeLine";
import data from '../../db/data';

const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "")] = require(next);
        return acc;
    }, {});

// Folder img
const images = importAll(
    require.context('../../assets/Home', false, /\.(png|jpe?g|svg)$/)
);

class DescriptionJO extends Component {
    state = {
        key: "1936"
    };


    onClickDate = (event) => {
        event.preventDefault();
        this.setState({
            key: event.target.value,
        });
    };

    onClickDiscover = () => {
        localStorage.setItem('key', this.state.key);
    };

    render() {
        console.log(images);
        return (
            <Grid>
                <Row middle="lg" className="container">
                    <Col xs={12} lg={6} className="container-img">
                        {(this.state.key === "2008") &&
                        <img src={images[data.list[0][this.state.key].img]} alt="img-date"
                             className="container-img__bg--fixed"/>
                        }
                        {(this.state.key === "1936" || this.state.key === "1968" || this.state.key === "1972" || this.state.key === "2016" || this.state.key === "2024") &&
                            <img src={images[data.list[0][this.state.key].img]} alt="img-date"
                            className="container-img__bg"/>
                        }
                    </Col>

                    <Col xs={12} lg={6} className="container-descriptif">
                        <h1 className="container-descriptif__date">{data.list[0][this.state.key].date}</h1>
                        <div className='container__descriptionJO-title'>
                            <h1 className="container-descriptif__title">
                                {data.list[0][this.state.key].title}
                            </h1>
                            <p className="container-descriptif__text">{data.list[0][this.state.key].text}</p>
                        </div>

                        <div className="container-descriptif__link">
                            <Link to={'/Discover'}>
                                <button onClick={this.onClickDiscover} className="container-descriptif__btn">Découvrir
                                </button>
                            </Link>
                        </div>

                        <TimeLine
                            onClickDate={event => this.onClickDate(event)}
                            date={this.state.key}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default DescriptionJO;