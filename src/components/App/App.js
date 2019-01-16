import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import Home from '../../views/Home/Home';
import './App.css';
import JessieOwens from "../../views/JessieOwens/JessieOwens";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Fragment>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/JessieOwens" component={JessieOwens}/>
                    </Fragment>
                </Router>
            </div>
        );
    }
}

export default App;

