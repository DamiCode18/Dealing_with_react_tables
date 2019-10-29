import React, {Component} from 'react';
import axios from 'axios';
import img1 from '../images/index.png';
import './User.css';

class CreateUser extends Component {
	state = {
		Code      : '',
		Name      : '',
		Position  : '',
		BirthDate : '',
		Gender    : '',
		Status    : '',
		Photo     : ''
	};
	onCodeChange = (e) => {
		this.setState({
			Code : e.target.value
		});
	};
	onNameChange = (e) => {
		this.setState({
			Name : e.target.value
		});
	};
	onPositionChange = (e) => {
		this.setState({
			Position : e.target.value
		});
	};
	onBirthDateChange = (e) => {
		this.setState({
			BirthDate : e.target.value
		});
	};
	onGenderChange = (e) => {
		this.setState({
			Gender : e.target.value
		});
	};
	onStatusChange = (e) => {
		this.setState({
			Status : e.target.value
		});
	};
	onPhotoChange = (e) => {
		this.setState({
			Photo : e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const user = {
			Name : this.state.Name
		};
		console.log(user);

		axios.post('http://localhost:5000/users/add', user).then((res) => console.log(res.data));

		this.setState({
			username : ''
		});
	};
	render() {
		return (
			<div className='user text-center'>
				<div className='img-thumbnail m-auto width p-5 text-center'>
					<div className='pb-3'>
						<img src={img1} alt='img' style={{width: '100px', height: '100px'}} />
					</div>
					<h3>Create New User</h3>
					<form onSubmit={(e) => e.preventDefault() && false}>
						<div className='m-4 form-group'>
							<input
								placeholder='Code'
								type='text'
								required
								className='form-control'
								value={this.state.Code}
								onChange={this.onCodeChange}
							/>
						</div>
						<div className='m-4 form-group'>
							<input
								placeholder='Name'
								type='text'
								required
								className='form-control'
								value={this.state.Name}
								onChange={this.onNameChange}
							/>
						</div>
						<div className='m-4 form-group'>
							<input
								placeholder='Position'
								type='text'
								required
								className='form-control'
								value={this.state.Position}
								onChange={this.onPositionChange}
							/>
						</div>
						<div className='m-4 form-group'>
							<input
								placeholder='BirthDate'
								type='text'
								required
								className='form-control'
								value={this.state.BirthDate}
								onChange={this.onBirthDateChange}
							/>
						</div>
						<div className='m-4 form-group'>
							<select className='form-control' value={this.state.Gender} onChange={this.onGenderChange}>
								<option>Male</option>
								<option>Female</option>
							</select>
						</div>
						<div className='m-4 form-group'>
							<select className='form-control' value={this.state.Status} onChange={this.onStatusChange}>
								<option>Active</option>
								<option>On Leave</option>
							</select>
						</div>
						<div className='m-4 form-group'>
							<input
								type='file'
								required
								className='form-control-file'
								value={this.state.Photo}
								onChange={this.onPhotoChange}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{borderRadius: '50px', padding: '10px', width: '200px'}}
								type='submit'
								value='Create User'
								className='btn btn-primary'
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default CreateUser;
