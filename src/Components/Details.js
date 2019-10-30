import React from 'react';
import './Details.css';
import img1 from '../images/IMG_20190402_045844_764.JPG';

const Details = () => {
	return (
		<div className='details container-fluid mt-5'>
			<div className='details text-center row' style={{background: '#e6e6e6', height: '100%'}}>
				<div className='col-lg-2 col-sm-1' />
				<div className='my-5 col-lg-2 col-sm-2'>
					<img className='img rounded-circle' src={img1} alt='img' />
				</div>
				<div className='name col-lg-4 col-sm-4 mt-5'>
					<h4>Adebayo Damilare</h4>
					<p>Developer</p>
					<input value='Edit Employee Details' className='btn btn-info' type='submit' />
				</div>
				<div className='col-lg-2 col-sm-3 mt-5'>
					<p>Code: 45AD</p>
					<p>DOB: 23/07/1921</p>
					<p>Gender: Male</p>
					<p>Status: Full-Time</p>
				</div>
				<div className='col-lg-2 col-sm-1' />
			</div>
			<div className='row'>
				<div className='col-lg-2 col-sm-1' />
				<div className='col-lg-4 col-sm-5 col-xs-12'>
					<div className='m-auto  card' style={{height: '350px', maxWidth: '350px'}}>
						<div className='card-body'>
							<h4 className='card-title'>
								<i className='m-4  fa fa-phone fa-lg' />Contact Information
							</h4>
							<p>
								<i className='m-2  fa fa-envelope' /> damilare@techsavvyng.com
							</p>
							<p>
								<i className='m-2  fa fa-mobile' /> +44 56374 834
							</p>
							<p>
								<i className='m-2  fa fa-phone' /> + 234 703028 5512
							</p>
							<p>
								<i className='m-2  fa fa-phone' /> 01 53986 47
							</p>
						</div>
					</div>
				</div>
				<div className='col-lg-4 col-sm-5 col-xs-12'>
					<div className='m-auto card' style={{height: '350px', maxWidth: '350px'}}>
						<div className='card-body'>
							<h4 className='card-title'>
								<i className='m-4  fa fa-map-marker fa-lg' />Address Information
							</h4>
							<h5>
								<i className='m-2  fa fa-home fa-2x' /> Home
							</h5>
							<p>5, Shyllon street, Palmgrove, Lagos State, Nigeria.</p>
							<h5>
								<i className='m-2  fa fa-envelope fa-2x' /> Postal
							</h5>
							<p>PO Box 4125, Palmgrove, Lagos</p>
						</div>
					</div>
				</div>
				<div className='col-lg-2 col-sm-1' />
			</div>
		</div>
	);
};

export default Details;
