import React from 'react';
import '../../styles/TimeLine.scss';

// const TimeLine = ({title, text, bgPersona, bgTime, onClick}) => {

const TimeLine = ({ onClickDate, date }) => (
            <div>
                <div className="container-btn">
                    <button onClick={event => onClickDate(event)} className={`container-btn__btn ${date === '1936' ? 'active' : ''}`} value="1936">1936</button>

                    <button onClick={event => onClickDate(event)} className={`container-btn__btn ${date === '1968' ? 'active' : ''}`} value="1968">1968</button>

                    <button onClick={event => onClickDate(event)} className={`container-btn__btn ${date === '1972' ? 'active' : ''}`} value="1972">1972</button>

                    <button onClick={event => onClickDate(event)} className={`container-btn__btn ${date === '2008' ? 'active' : ''}`} value="2008">2008</button>

                    <button onClick={event => onClickDate(event)} className={`container-btn__btn ${date === '2016' ? 'active' : ''}`} value="2016">2016</button>

                    <button onClick={event => onClickDate(event)} className={`container-btn__btn ${date === '2024' ? 'active' : ''}`} value="2024">2024</button>
                </div>
            </div>
        );

export default TimeLine;