import	React, { Component }				from	'react';
import	{ Link }							from	'react-router-dom';

import								'./Header.scss';

const Logo							=	require('../../assets/Home/OGE logo.png');

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
						pathname: '/Home',
						state: { loading: false }
					}}>
					<img className='header__img' src={Logo} alt='Logo' />
				</Link>
				<Link
					to={{
						pathname: '/Home',
						state: { loading: false }
					}}
					className='header__close'/>
			</header>
		);
	}
}