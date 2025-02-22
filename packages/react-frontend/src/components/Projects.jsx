//import React from 'react'
import ctwIcon from '../assets/svg-icons/CTW_Logo.svg'
import avcIcon from '../assets/svg-icons/avc-logo.svg'
import sweetNoteIcon from '../assets/svg-icons/sweet-note-logo.svg'
import taskManagerIcon from '../assets/svg-icons/api-logo.svg'
import checkMarkCircleIcon from '../assets/svg-icons/check-mark-circle.svg'
import ctwPhoneImage from '../assets/svg-icons/ctw-images/CTW-Image-1.svg'
import avcPhoneImage from '../assets/svg-icons/avc-images/AVC-Image-1.svg'
import sweetNoteImage from '../assets/images/sweet-note.png'
import taskManagerImage from '../assets/images/task-manager.png'
import nextArrowIcon from '../assets/svg-icons/next-arrow.svg'
import prevArrowIcon from '../assets/svg-icons/prev-arrow.svg'

import { Link } from 'react-router-dom'

function Projects() {

	return (
		<div class="">
			<h1 class="">
				All <span class="">Projects</span>
			</h1>
			<div id="carouselExample" class="">
				<div class="">
					{/* CTW */}
					<div class="">
						<div class="">
							<img src={ctwIcon} class="" alt="CTW Icon" />
							<div class="">
								<h4 class="">California Traffic Watch</h4>
								<h5 class="">
									Mobile App <span class=""></span>
									<span class="">
										Published
										<img src={checkMarkCircleIcon} class="" alt="Checkmark Circle" />
									</span>
								</h5>
							</div>
						</div>
						<p class="">
							A traffic app that provides real-time traffic data for California highways including
							live CCTV feeds, incident reports, closures, and chain control information.
						</p>
						<Link to="california-traffic-watch">
							<button class="">View Project</button>
						</Link>
					</div>
					<img src={ctwPhoneImage} class="" alt="CTW Mobile Image" />
				</div>
				{/* AVC */}
				<div class="">
					<div class="">
						<img src={avcIcon} class="" alt="AVC Icon" />
						<div class="">
							<h4 class="">Interactive Campus Map</h4>
							<h5 class="">Mobile App</h5>
						</div>
					</div>
					<p class="">
						A location-based interactive map built to navigate students and faculty around Antelope
						Valley College's campus.
					</p>
					<button class="">View Project</button>
				</div>
				<img src={avcPhoneImage} class="" alt="AVC Mobile Image" />
				{/* SWEet Note */}
				<div class="">
					<div class="">
						<img src={sweetNoteIcon} class="" alt="SWEet Note Icon" />
						<div class="">
							<h4 class="">SWEet Note</h4>
							<h5 class="">Web App</h5>
						</div>
					</div>
					<p class="">
						A simple note-taking app designed for quickly organizing notes and daily tasks. Includes
						custom group creation and a user-friendly interface for seamless productivity.
					</p>
					<button class="">View Project</button>
				</div>
				<img src={sweetNoteImage} class="" alt="SWEet Note Web Image" />
				{/* Task Manager API */}
				<div class="">
					<div class="">
						<img src={taskManagerIcon} class="" alt="Task Manager API Icon" />
						<div class="">
							<h4 class="">Task Manager</h4>
							<h5 class="">API</h5>
						</div>
					</div>
					<p class="">
						A RESTful API designed for personalized task management. Allows users to efficiently
						track, view, and modify their tasks with intuitive endpoints.
					</p>
					<button class="">View Project</button>
				</div>
				<img src={taskManagerImage} class="" alt="Task Manager API Web Image" />
			</div>
			<button class="" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
				<img src={prevArrowIcon} aria-hidden="true" alt="Previous" />
				<span class="">Previous</span>
			</button>
			<button class="" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
				<img src={nextArrowIcon} aria-hidden="true" alt="Next" class="" />
				<span class="">Next</span>
			</button>
		</div>
	)
}

export default Projects
