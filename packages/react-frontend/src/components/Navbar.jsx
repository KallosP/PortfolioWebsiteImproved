//import React from 'react'
import styles from '../styles/navbar.module.css'
import closeIcon from '../assets/svg-icons/close.svg'

function Navbar() {
	const navClasses = [
		'navbar',
		'fixed-top',
		'navbar-expand-lg',
		'navbar-light',
		'mx-3',
		'my-3',
		styles['c-main-nav']
	].join(' ')
	const containerDivClasses = ['container-fluid', 'justify-content-center'].join(' ')
	const navbarTogglerClasses = ['navbar-toggler', styles['c-navbar-toggler']].join(' ')
	const navbarCollapseClasses = ['collapse', 'navbar-collapse'].join(' ')
	const navbarNavClasses = ['navbar-nav', 'align-items-center', styles['c-navbar-nav']].join(' ')
	const navItemFirstLiClasses = ['nav-item', styles['c-nav-item'], styles['c-first-li']].join(' ')
	const navItemClasses = ['nav-item', styles['c-nav-item']].join(' ')
	const navItemLastLiClasses = ['nav-item', styles['c-nav-item'], styles['c-last-li']].join(' ')
	const navLinkClasses = ['nav-link', styles['c-nav-link']].join(' ')

	return (
		<nav className={navClasses}>
			<div className={containerDivClasses}>
				<button
					className={navbarTogglerClasses}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<img src={closeIcon} alt="Close" />
				</button>
				<div className={navbarCollapseClasses} id="navbarNav">
					<ul className={navbarNavClasses}>
						<li className={navItemFirstLiClasses}>
							<a className={navLinkClasses} aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className={navItemClasses}>
							<a className={navLinkClasses} href="#">
								Projects
							</a>
						</li>
						<li className={navItemClasses}>
							<a className={navLinkClasses} href="#">
								Skills
							</a>
						</li>
						<li className={navItemClasses}>
							<a className={navLinkClasses} href="#">
								Education
							</a>
						</li>
						<li className={navItemLastLiClasses}>
							<a className={navLinkClasses} href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Navbar
