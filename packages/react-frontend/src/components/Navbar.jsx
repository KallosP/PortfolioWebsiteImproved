//import React from 'react'
import '../styles/navbar.css'
import closeIcon from '../assets/svg-icons/close.svg'

function Navbar() {
	return (
		<nav class="navbar fixed-top navbar-expand-lg navbar-light mx-3 my-3 c-main-nav">
			<div class="container-fluid justify-content-center">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<img src={closeIcon} alt="Close" />
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav align-items-center">
						<li class="nav-item first-li">
							<a class="nav-link" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Projects
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Skills
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Education
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
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
