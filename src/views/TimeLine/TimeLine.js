import React, { Component } from 'react';
import '../../styles/TimeLine.scss';

// const TimeLine = ({title, text, bgPersona, bgTime, onClick}) => {

class TimeLine extends Component {
    onClickDate = (event) => {
        this.props.onClick(event);

    };
    render() {
        return (
            <div>
                <div className="container-btn">
                    <button  onClick={this.onClickDate} className={`container-btn__btn`} value="1936">1936</button>

                    <button onClick={this.onClickDate} className="container-btn__btn" value="1948">1948</button>

                    <button onClick={this.onClickDate} className="container-btn__btn" value="1972">1972</button>

                    <button onClick={this.onClickDate} className="container-btn__btn" value="2008">2008</button>

                    <button onClick={this.onClickDate} className="container-btn__btn" value="2016">2016</button>

                    <button onClick={this.onClickDate} className="container-btn__btn" value="2024">2024</button>
                </div>
            </div>
        );
        
    }

}
// };

export default TimeLine;