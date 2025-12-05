import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

interface HeaderProps {
	pageTitle?: string
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<div className={styles.logoSection}>
					{pageTitle && <h1 className={styles.pageTitle}>{pageTitle}</h1>}
				</div>
				<button 
					className={styles.hamburger}
					onClick={toggleMenu}
					aria-label="Toggle menu"
					aria-expanded={isMenuOpen}
				>
					<span className={styles.hamburgerLine}></span>
					<span className={styles.hamburgerLine}></span>
					<span className={styles.hamburgerLine}></span>
				</button>
				<nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
					<Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
					<Link to="/library" onClick={() => setIsMenuOpen(false)}>Library</Link>
					<Link to="/signin" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
