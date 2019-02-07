import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import './App.css';
import	Discover					from "../../views/Discover/Discover";
import	Home						from	'../../views/Home/Home';
import	HomeContainer				from '../../views/Home/HomeContainer';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Fragment>
						<Route exact path="/" component={HomeContainer}/>
						<Route exact path="/Home" component={Home}/>
						<Route exact path="/Discover" component={Discover}/>
					</Fragment>
				</Router>
			</div>
		);
	}
}

export default App;

