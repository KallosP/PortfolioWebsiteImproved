// src/MyApp.jsx
//import React from 'react'
import { Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import CTW from './components/project-pages/CTW'
import ScrollToTop from './components/ScrollToTop'

function MyApp() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="california-traffic-watch" element={<CTW />} />
			</Routes>
		</>
	)
}
export default MyApp
