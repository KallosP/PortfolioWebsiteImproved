// src/MyApp.jsx
//import React from 'react'
import { Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/home/HomePage'
import CTW from './pages/CTWPage'
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
