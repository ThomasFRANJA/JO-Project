import	React, { Component, Fragment }		from	'react';

import	Home								from	'../Home/Home';
import	Loading								from	'../../components/Loading/Loading';


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
			<Fragment>
				<Home />
			</Fragment>

		);
	}
}