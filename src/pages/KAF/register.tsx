import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './register.module.css'
import Layout from './Layout'
import { TextField, Button, Link } from '../../components'

const RegisterPage: React.FC = () => {
	const [email, setEmail] = React.useState('');
	const [organization, setOrganization] = React.useState('');
	const [fullName, setFullName] = React.useState('');
	const [accessReason, setAccessReason] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const [organizationError, setOrganizationError] = React.useState('');
	const [fullNameError, setFullNameError] = React.useState('');
	const [accessReasonError, setAccessReasonError] = React.useState('');

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Basic client-side validation
		let valid = true;

		if (!fullName) {
			setFullNameError('Full Name is required');
			valid = false;
		} else if (fullName.length < 2) {
			setFullNameError('Password must be at least 2 characters');
			valid = false;
		} else {
			setFullNameError('');
		}

    if (!email) {
			setEmailError('Email is required');
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setEmailError('Please enter a valid email address');
			valid = false;
		} else {
			setEmailError('');
		}

		if (!organization) {
			setOrganizationError('Organization is required');
			valid = false;
		} else {
			setOrganizationError('');
		}

		if (!accessReason) {
			setAccessReasonError('Reason For Access is required');
			valid = false;
		} else {
			setAccessReasonError('');
		}

    if (!valid) return;

		// proceed with form submission (stub)
		alert('Registration submitted (stub)')
	}

	return (
		<Layout pageTitle="Request Access">
			<div className={styles.page}>
			{/* Left side - Registration Form */}
			<div className={styles.leftPanel}>
			
				{/* Form */}
				<form className={styles.form} noValidate onSubmit={handleSubmit}>
					<TextField
						id="fullName"
						label="Full Name"
						type="text"
						name="fullName"
						placeholder="Full Name"
						value={fullName}
						onChange={(v) => setFullName(v)}
						error={fullNameError}
						required
					/>

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
						id="organization"
						label="Organization"
						type="text"
						name="organization"
						placeholder="Organization"
						value={organization}
						onChange={(v) => setOrganization(v)}
						error={organizationError}
						required
					/>

					<TextField
						id="accessReason"
						label="Reason For Access"
						type="text"
						name="accessReason"
						placeholder="Reason For Access"
						value={accessReason}
						onChange={(v) => setAccessReason(v)}
						error={accessReasonError}
						required
					/>

					<Button
						id="register-button"
						variant="tertiary"
						size="xxlg"
						type="submit">
							Submit Request		
					</Button>

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
            <div className={styles.overlayText}>
						  Request Access to Kyndryl Agentic Framework
            </div>
					</div>
				</div>
			</div>
			</div>
		</Layout>
	)
}

export default RegisterPage
