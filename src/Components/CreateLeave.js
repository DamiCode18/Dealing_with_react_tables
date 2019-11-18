import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import img1 from '../images/index.png';
import './User.css';

class CreateUser extends Component {
    state = {
        Code: '',
        Name: '',
        Position: '',
        Gender: '',
        Reason: '',
        leaveStatus: '',
        fromDuration: new Date(),
        toDuration: new Date()

    };
    onCodeChange = (e) => {
        this.setState({
            Code: e.target.value
        });
    };
    onNameChange = (e) => {
        this.setState({
            Name: e.target.value
        });
    };
    onPositionChange = (e) => {
        this.setState({
            Position: e.target.value
        });
    };
    onGenderChange = (e) => {
        this.setState({
            Gender: e.target.value
        });
    };
    onReasonChange = (e) => {
        this.setState({
            Reason: e.target.value
        });
    };
    onFromDurationChange = (date) => {
        this.setState({
            fromDuration: date
        });
    };
    onToDurationChange = (date) => {
        this.setState({
            toDuration: date
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/leave/admin').then((res) => console.log(res.data));
        window.location = '/leave';
        this.setState({
            leaveStatus: "pending"
        })
    };


    render() {
        return (
            <div className='user text-center'>
                <div className='img-thumbnail m-auto width p-5 text-center'>
                    <div className='pb-3'>
                        <img src={img1} alt='img' style={{ width: '100px', height: '100px' }} />
                    </div>
                    <h3>Make Leave Request</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className='m-4 form-group'>
                            <input
                                placeholder='Name'
                                type='text'
                                required
                                className='form-control'
                                value={this.state.Code}
                                onChange={this.onCodeChange}
                            />
                        </div>
                        <div className='m-4 form-group'>
                            <input
                                placeholder='Code'
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
                                placeholder='Reason'
                                type='text'
                                required
                                className='form-control'
                                value={this.state.Reason}
                                onChange={this.onReasonChange}
                            />
                        </div>
                        <div className='m-4 form-group'>
                            <select className='form-control' value={this.state.Gender} onChange={this.onGenderChange}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <div>
                                <DatePicker selected={this.state.fromDuration} onChange={this.onFromDurationChange} />
                                <DatePicker selected={this.state.toDuration} onChange={this.onToDurationChange} />
                            </div>
                        </div>
                        <div className='form-group'>
                            <input
                                style={{ borderRadius: '50px', padding: '10px', width: '200px' }}
                                type='submit'
                                value='Request'
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
