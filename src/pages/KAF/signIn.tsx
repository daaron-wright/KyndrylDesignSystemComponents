import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './signIn.module.css'
import Layout from './Layout'
import { TextField, Button, Link } from '../../components'

const SignIn: React.FC = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Basic client-side validation
		let valid = true;

		if (!email) {
			setEmailError('Email is required');
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setEmailError('Please enter a valid email address');
			valid = false;
		} else {
			setEmailError('');
		}

		if (!password) {
			setPasswordError('Password is required');
			valid = false;
		} else if (password.length < 8) {
			setPasswordError('Password must be at least 8 characters');
			valid = false;
		} else {
			setPasswordError('');
		}

		if (!valid) return;

		// proceed with form submission (stub)
		alert('Sign in submitted (stub)')
	}

	return (
		<Layout pageTitle="Sign In">
			<div className={styles.page}>
			{/* Left side - Sign In Form */}
			<div className={styles.leftPanel}>
			
				{/* Subtitle */}
				<p className={styles.subtitle}>
					Enter your credentials to access the Kyndryl Agentic Framework
				</p>

				{/* Form */}
				<form className={styles.form} noValidate onSubmit={handleSubmit}>
					<TextField
						id="email"
						label="Email Address"
						type="email"
						name="email"
						autoComplete="email"
						placeholder="Email Address"
						value={email}
						onChange={(v) => setEmail(v)}
						error={emailError}
						required
					/>

					<TextField
						id="password"
						label="Password"
						type="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={(v) => setPassword(v)}
						error={passwordError}
						required
					/>

					<Button
						id="sign-in-button"
						variant="tertiary"
						size="xlg"
						type="submit">
							Sign In		
					</Button>

					<div className={styles.forgotLink}>
						<Link 
							id="forgot-password-link"
							href="#forgot-password"
							variant="inline"
							size="lg"
							label="Forgotten Password"
							endIcon={
  								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							}/>
					</div>

				</form>
			</div>

			{/* Right side - Register Section */}
			<div className={styles.rightPanel}>
				<div className={styles.registerCard}>
					<img
						src="/src/assets/register_image.png"
						alt="Register for access"
						className={styles.registerImage}
					/>
					<div className={styles.registerOverlay}>
						<Button 
							id="register-button"
							variant="secondary"
							size="xxlg"
							onClick={() => navigate('/register')}
							endIcon={
  								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							}>
							Register for Access to view the Kyndryl Agentic Demo's	
						</Button>
					</div>
				</div>
			</div>
			</div>
		</Layout>
	)
}

export default SignIn
