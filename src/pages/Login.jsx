import React from 'react'

import loginStyles from '../styles/loginStyles.css'
import LoginIcon from '../img/login.svg'
import DropIcon from '../img/dropIcon.svg';

function Login() {
	return (
		<div className='container flex'>
			<div className='left-container flex'>
				<h1>Welcome to App Name</h1>
				<p>Get ahead of the curve. Join the next generation of health heroes.</p>
				<img src={LoginIcon} alt='' />
			</div>
			
			<div className='right-container flex'>
				<h2>Sign-in to your account</h2>
				
				<form className="form-container flex">
					<div className="input-group">
						<input type="text" 
							name="username" id="username"
							placeholder='Username'
							className='outline-none' />
					</div>

					<div className="input-group">
						<input type="password" 
							name="password" id="password"
							placeholder='Password'
							className='outline-none' />
					</div>
					
					<div className="input-group flex">
						<select name="" id="" className='outline-none pointer'>
							<option value="">Select Unit Name</option>
							<option value="value-1">Value 1</option>
							<option value="value-2">Value 2</option>
							<option value="value-3">Value 3</option>
						</select>
						<img src={DropIcon} id='drop-icon' alt='Drop Down Icon' />
					</div>

					<input type="submit" value="Sign In"
						className='pointer' />
				</form>
			</div>
		</div>
	)
}

export default Login