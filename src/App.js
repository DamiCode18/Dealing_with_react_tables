import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Employees from './Components/Employees';
import User from './Components/User';
import Details from './Components/Details';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Route path='/details' exact component={Details} />
					<Route path='/' exact component={Employees} />
					<Route path='/user' exact component={User} />
				</Router>
			</div>
		);
	}
}

export default App;
