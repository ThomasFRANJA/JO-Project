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
    require.context('../../assets/img/Home', false, /\.(png|jpe?g|svg)$/)
);

class DescriptionJO extends Component {
   state = {
        key: "1936",
    };


   onClickDate = (event) => {
       event.preventDefault();
       this.setState({
           key: event.target.value,
       });
       console.log(event.target.value)
   };

    render(){
    console.log(images)
        return(
            <Grid>
                <Row middle="lg" className="container">
                    <Col lg= {6} className="container-img">
                        <img  src={images[data.list[0][this.state.key].img]} alt="" className="container-img__bg"/>
                    </Col>

                    <Col lg={6} className="container-descriptif">
                        <h1 className="container-descriptif__date">{data.list[0][this.state.key].date}</h1>
                        <h1 className="container-descriptif__title">
                            {data.list[0][this.state.key].title}
                        </h1>
                        <p className="container-descriptif__text">{data.list[0][this.state.key].text}</p>

                        <div className="container-descriptif__link">
                            <Link to={'/JessieOwens'}>
                                <button className="container-descriptif__btn">Découvrir</button>
                            </Link>
                        </div>

                        <TimeLine
                            onClick={this.onClickDate}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default DescriptionJO;