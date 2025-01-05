// src/MyApp.jsx
//import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CTW from './components/project-pages/CTW'

function MyApp() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="california-traffic-watch" element={<CTW />} />
		</Routes>
	)
}
export default MyApp
