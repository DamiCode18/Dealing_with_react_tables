import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Employees from './Components/Employees';
import User from './Components/User';
import Details from './Components/Details';
import LeaveList from './Components/LeaveList';
import CreateLeave from './Components/CreateLeave';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Route path='/details' exact component={Details} />
					<Route path='/' exact component={Employees} />
					<Route path='/user' exact component={User} />
					<Route path='/leave' exact component={LeaveList} />
					<Route path='/create-leave' exact component={CreateLeave} />
				</Router>
			</div>
		);
	}
}

export default App;
