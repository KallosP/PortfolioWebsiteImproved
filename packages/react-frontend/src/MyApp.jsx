// src/MyApp.jsx
//import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

function MyApp() {
	return (
		<>
			<Navbar />
			<Home />
			<Projects />
			<Contact />
		</>
	)
}
export default MyApp
