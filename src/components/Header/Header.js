import	React, { Component }				from	'react';
import	{ Link }							from	'react-router-dom';

import								'./Header.scss';

export default class Header extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		console.log(this.props);
		
		return (
			<header className='header'>
				<Link
					to={{
						pathname: '/',
						state: { loading: false }
					}}
					className='header__close'/>
			</header>
		);
	}
}