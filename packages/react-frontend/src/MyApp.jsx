// src/MyApp.jsx
//import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import CTWPage from './pages/CTWPage'
import ScrollToTop from './components/ScrollToTop'

function MyApp() {
	return (
		<BrowserRouter>
			{/* Default font is Poppins and white text for all elements */}
			<div className="flex-col font-poppins text-white h-screen bg-secondary duration-300 transition-all overflow-y-scroll">
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="california-traffic-watch" element={<CTWPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
export default MyApp
