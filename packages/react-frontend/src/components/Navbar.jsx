//import React from 'react'
import closeIcon from '../assets/svg-icons/close.svg'

function Navbar() {
	const navItems = [
		{ name: 'Home', href: '#' },
		{ name: 'Projects', href: '#' },
		{ name: 'Skills', href: '#' },
		{ name: 'Education', href: '#' },
		{ name: 'Contact', href: '#' }
	]

	return (
		<nav className="flex absolute">
			<button
				className="xs:inherit md:hidden"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<img src={closeIcon} alt="Close" />
			</button>
			<ul className="flex py-2 px-3 bg-gray-500 text-gray-300 bg-opacity-50 backdrop-blur-lg rounded-full gap-4 justify-center items-center">
				{navItems.map((item, index) => (
					<li key={index} className={'py-2 transition duration-300 px-4 hover:bg-gray-600 rounded-full border border-gray-300'}>
						<a href={item.href} className="">
							{item.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
export default Navbar
