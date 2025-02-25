//import React from 'react'
import styles from '../styles/projects.module.css'
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
	const fluidContainerDivClasses = [
		'container-fluid',
		'mt-5',
		'px-0',
		styles['c-container-fluid']
	].join(' ')
	const h1Classes = ['text-secondary', 'text-center'].join(' ')
	const spanClasses = ['text-primary'].join(' ')
	const carouselDivClasses = ['carousel', 'slide', 'carousel-fade', styles['c-carousel-div']].join(
		' '
	)
	const carouselInnerClasses = ['carousel-inner', styles['c-carousel-inner']].join(' ')
	const carouselItemClasses = ['carousel-item', styles['c-carousel-item']].join(' ')
	const carouselItemActiveClasses = [
		carouselItemClasses,
		'active',
		styles['c-carousel-item-active']
	].join(' ')
	const carouselControlPrevClasses = [
		'carousel-control-prev',
		styles['c-carousel-control-prev']
	].join(' ')
	const carouselControlNextClasses = [
		'carousel-control-next',
		styles['c-carousel-control-next']
	].join(' ')
	const visuallyHiddenClasses = ['visually-hidden'].join(' ')
	const pClasses = ['text-secondary', styles['c-p']].join(' ')
	const projectInfoClasses = ['container-fluid', styles['c-project-info']].join(' ')
	const learnMoreButtonClasses = [
		'btn',
		'enable-shadow',
		'btn-primary',
		styles['c-learn-more-btn']
	].join(' ')
	const arrowClasses = [styles['c-arrow']].join(' ')
	const projectHeaderClasses = [styles['c-project-header']].join(' ')
	const projectTitleAndTypeClasses = [styles['c-project-title-and-type']].join(' ')
	const projectTitleClasses = ['text-secondary', styles['c-project-title']].join(' ')
	const projectTypeClasses = ['text-secondary', styles['c-project-type']].join(' ')
	const iconImgClasses = ['', styles['c-icon-img']].join(' ')
	const bullet = [styles['c-bullet']]
	const published = ['text-primary']
	const checkMarkCircle = [styles['c-check-mark-circle']]
	const mobileImageClasses = [styles['c-mobile-image']].join(' ')
	const webImageClasses = [styles['c-web-image']].join(' ')

	return (
		<div className={fluidContainerDivClasses}>
			<h1 className={h1Classes}>
				All <span className={spanClasses}>Projects</span>
			</h1>
			<div id="carouselExample" className={carouselDivClasses}>
				<div className={carouselInnerClasses}>
					{/* CTW */}
					<div className={carouselItemActiveClasses}>
						<div className={projectInfoClasses}>
							<div className={projectHeaderClasses}>
								<img src={ctwIcon} className={iconImgClasses} alt="CTW Icon" />
								<div className={projectTitleAndTypeClasses}>
									<h4 className={projectTitleClasses}>California Traffic Watch</h4>
									<h5 className={projectTypeClasses}>
										Mobile App <span className={bullet}></span>{' '}
										<span className={published}>
											Published
											<img
												src={checkMarkCircleIcon}
												className={checkMarkCircle}
												alt="Checkmark Circle"
											/>
										</span>
									</h5>
								</div>
							</div>
							<p className={pClasses}>
								A traffic app that provides real-time traffic data for California highways including
								live CCTV feeds, incident reports, closures, and chain control information.
							</p>
							<Link to="california-traffic-watch">
								<button className={learnMoreButtonClasses}>
									View Project
								</button>
							</Link>
						</div>
						<img src={ctwPhoneImage} className={mobileImageClasses} alt="CTW Mobile Image" />
					</div>
					{/* AVC */}
					<div className={carouselItemClasses}>
						<div className={projectInfoClasses}>
							<div className={projectHeaderClasses}>
								<img src={avcIcon} className={iconImgClasses} alt="AVC Icon" />
								<div className={projectTitleAndTypeClasses}>
									<h4 className={projectTitleClasses}>Interactive Campus Map</h4>
									<h5 className={projectTypeClasses}>Mobile App</h5>
								</div>
							</div>
							<p className={pClasses}>
								A location-based interactive map built to navigate students and faculty around
								Antelope Valley College's campus.
							</p>
							<button className={learnMoreButtonClasses}>View Project</button>
						</div>
						<img src={avcPhoneImage} className={mobileImageClasses} alt="AVC Mobile Image" />
					</div>
					{/* SWEet Note */}
					<div className={carouselItemClasses}>
						<div className={projectInfoClasses}>
							<div className={projectHeaderClasses}>
								<img src={sweetNoteIcon} className={iconImgClasses} alt="SWEet Note Icon" />
								<div className={projectTitleAndTypeClasses}>
									<h4 className={projectTitleClasses}>SWEet Note</h4>
									<h5 className={projectTypeClasses}>Web App</h5>
								</div>
							</div>
							<p className={pClasses}>
								A simple note-taking app designed for quickly organizing notes and daily tasks.
								Includes custom group creation and a user-friendly interface for seamless
								productivity.
							</p>
							<button className={learnMoreButtonClasses}>View Project</button>
						</div>
						<img src={sweetNoteImage} className={webImageClasses} alt="SWEet Note Web Image" />
					</div>
					{/* Task Manager API */}
					<div className={carouselItemClasses}>
						<div className={projectInfoClasses}>
							<div className={projectHeaderClasses}>
								<img src={taskManagerIcon} className={iconImgClasses} alt="Task Manager API Icon" />
								<div className={projectTitleAndTypeClasses}>
									<h4 className={projectTitleClasses}>Task Manager</h4>
									<h5 className={projectTypeClasses}>API</h5>
								</div>
							</div>
							<p className={pClasses}>
								A RESTful API designed for personalized task management. Allows users to efficiently
								track, view, and modify their tasks with intuitive endpoints.
							</p>
							<button className={learnMoreButtonClasses}>View Project</button>
						</div>
						<img
							src={taskManagerImage}
							className={webImageClasses}
							alt="Task Manager API Web Image"
						/>
					</div>
				</div>
				<button
					className={carouselControlPrevClasses}
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="prev">
					<img src={prevArrowIcon} aria-hidden="true" alt="Previous" />
					<span className={visuallyHiddenClasses}>Previous</span>
				</button>
				<button
					className={carouselControlNextClasses}
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="next">
					<img src={nextArrowIcon} aria-hidden="true" alt="Next" className={arrowClasses} />
					<span className={visuallyHiddenClasses}>Next</span>
				</button>
			</div>
		</div>
	)
}

export default Projects
