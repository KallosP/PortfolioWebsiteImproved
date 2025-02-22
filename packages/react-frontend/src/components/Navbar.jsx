//import React from 'react'
import closeIcon from '../assets/svg-icons/close.svg'

function Navbar() {

	return (
		<nav className="">
			<div className="">
				<button
					className=""
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<img src={closeIcon} alt="Close" />
				</button>
				<div className="" id="navbarNav">
					<ul className="">
						<li className="">
							<a className="" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="">
							<a className="" href="#">
								Projects
							</a>
						</li>
						<li className="">
							<a className="" href="#">
								Skills
							</a>
						</li>
						<li className="">
							<a className="" href="#">
								Education
							</a>
						</li>
						<li className="">
							<a className="" href="#">
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
