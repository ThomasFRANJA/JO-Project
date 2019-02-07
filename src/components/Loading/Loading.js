import	React, { Component }				from	'react';

import	Circle								from	'../Circle/Circle';

import											'./Loading.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';

class Loading extends Component {

	render() {

		return (
			<section className='loading'>
                <div className='loading__bg' />
				<Grid>
					<Row center="lg">
						<Col lg={12} xs={12}>
                            <div className='loading__container-circle'>
                                <Col className='loading__container-title'>
                                    <li className='loading__title-link'>
                                        <h2 className='loading__title loading__title-1'>The</h2>
                                    </li>

                                    <li className='loading__title-link'>
                                        <h1 className='loading__title loading__title-2'>Olympics</h1>
                                    </li>

                                    <li className='loading__title-link'>
                                        <h2 className='loading__title loading__title-3'>Games <span className='loading__title--span-1'>Effect</span></h2>
                                    </li>
                                </Col>
									<Circle className={`loading__circle circle__1`} />
									<Circle className={`loading__circle circle__2`} />
									<Circle className={`loading__circle circle__3`} />
									<Circle className={`loading__circle circle__4`} />
									<Circle className={`loading__circle circle__5`} />
                            </div>
                        </Col>
					</Row>
                </Grid>
			</section>
		);
	}
}

export default Loading