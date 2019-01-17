import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import './App.css';
import	JessieOwens					from "../../views/JessieOwens/JessieOwens";
import	HomeContainer				from '../../views/Home/HomeContainer';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Fragment>
						<Route exact path="/" component={HomeContainer}/>
						<Route exact path="/JessieOwens" component={JessieOwens}/>
					</Fragment>
				</Router>
			</div>
		);
	}
}

export default App;

