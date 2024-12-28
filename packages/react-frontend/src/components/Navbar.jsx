//import React from 'react'
import '../styles/navbar.css'
import closeIcon from '../assets/svg-icons/close.svg'

function Navbar() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light mx-3 my-3 c-main-nav">
			<div className="container-fluid justify-content-center">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<img src={closeIcon} alt="Close" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav align-items-center">
						<li className="nav-item first-li">
							<a className="nav-link" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Education
							</a>
						</li>
						<li className="nav-item last-li">
							<a className="nav-link" href="#">
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
