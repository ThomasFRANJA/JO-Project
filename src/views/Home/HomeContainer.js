import	React, { Component }		from	'react';

import	Home								from	'../Home/Home';
import	Loading								from	'../../components/Loading/Loading';

import	Discover							from	'../Discover/Discover';

import												'./HomeContainer.scss';

export default class HomeContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true
		}
	}

	 componentDidMount() {
		 setTimeout(() => {
			 this.setState({
				 loading: false
			 });
		 }, 5500);
	 }

	render() {

		if (this.state.loading) {
			return <Loading />
		}


		return (
			<div className='home__main-container'>
				<Home />
			</div>
		);
	}
}