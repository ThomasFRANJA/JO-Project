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

    render(){

    const { key } = this.state;

    console.log(images);
        return(
            <Grid>
                <Row middle="lg" className="container">
                    <Col xs={12} lg={6} className={`container-img container-img__${key}`}>
                        <img  src={images[data.list[0][this.state.key].img]} alt="" className="container-img__bg"/>
                    </Col>

                    <Col xs={12} lg={6} className="container-descriptif">
                        <h1 className={`container-descriptif__date container-descriptin__date-${key}`}>{data.list[0][this.state.key].date}</h1>
                        <div className='container__descriptionJO-title'>
                            <h1 className={`container-descriptif__title container-descriptif__title-${key}`}>
                                {data.list[0][this.state.key].title}
                            </h1>
                            <p className={`container-descriptif__text container-descriptif__text-${key}`}>{data.list[0][this.state.key].text}</p>
                        </div>

                        <div className="container-descriptif__link">
                            <Link to={'/Discover'}>
                                <button onClick={this.onClickDiscover} className="container-descriptif__btn">Découvrir</button>
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