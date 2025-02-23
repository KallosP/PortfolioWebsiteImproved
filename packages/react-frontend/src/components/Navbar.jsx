import React, { useState } from 'react'
import closeIcon from '../assets/svg-icons/close.svg'

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false) // State to control nav visibility

	const navItems = [
		{ name: 'Home', href: '#' },
		{ name: 'Projects', href: '#' },
		{ name: 'Skills', href: '#' },
		{ name: 'Education', href: '#' },
		{ name: 'Contact', href: '#' }
	]

	return (
		<nav className="md:flex md:w-auto md:rounded-full md:py-2 md:px-3 sm:flex-col p-2 w-1/2 bg-elevated text-gray-300 bg-opacity-50 backdrop-blur-lg rounded-lg align-center absolute">
			<button
				className="flex w-full justify-center sm:flex md:hidden"
				type="button"
				aria-label="Toggle navigation"
				onClick={() => setIsNavOpen(!isNavOpen)} // Toggle the nav visibility
			>
				<img src={closeIcon} alt="Toggle navigation" />
			</button>
			<ul
				className={`flex flex-col my-2 md:m-0 md:flex md:flex-row md:gap-4 gap-3 justify-center items-center ${isNavOpen ? 'flex' : 'hidden'}`}>
				{navItems.map((item, index) => (
					<li
						key={index}
						className={'flex justify-center border-2 transform hover:scale-105 transition duration-300 w-full md:w-auto py-2 px-4 hover:bg-gray-600 rounded-full border border-gray-300'}>
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
