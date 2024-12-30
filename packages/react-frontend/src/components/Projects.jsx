//import React from 'react'
import styles from '../styles/projects.module.css'
import ctwIcon from '../assets/svg-icons/CTW_Logo.svg'
import checkMarkCircleIcon from '../assets/svg-icons/check-mark-circle.svg'
import ctwPhoneImage from '../assets/svg-icons/ctw-phone-image.svg'

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
	const carouselInnerClasses = ['carousel-inner', 'px-5', styles['c-carousel-inner']].join(' ')
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
	const carouselControlPrevIconClasses = ['carousel-control-prev-icon'].join(' ')
	const carouselControlNextIconClasses = ['carousel-control-next-icon'].join(' ')
	const visuallyHiddenClasses = ['visually-hidden'].join(' ')
	const pClasses = ['text-secondary', styles['c-p']].join(' ')
	const projectInfoClasses = ['container-fluid', styles['c-project-info']].join(' ')
	const learnMoreButtonClasses = [
		'btn',
		'enable-shadow',
		'btn-primary',
		styles['c-learn-more-btn']
	].join(' ')
	const projectHeaderClasses = [styles['c-project-header']].join(' ')
	const projectTitleAndTypeClasses = [styles['c-project-title-and-type']].join(' ')
	const projectTitleClasses = ['text-secondary', styles['c-project-title']].join(' ')
	const projectTypeClasses = ['text-secondary', styles['c-project-type']].join(' ')
	const iconImgClasses = ['', styles['c-icon-img']].join(' ')
	const bullet = [styles['c-bullet']]
	const published = ['text-primary']
	const checkMarkCircle = [styles['c-check-mark-circle']]
	const mobileImageClasses = [styles['c-mobile-image']].join(' ')

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
							<button className={learnMoreButtonClasses}>View Project</button>
						</div>
						<img src={ctwPhoneImage} className={mobileImageClasses} alt="CTW Mobile Image" />
					</div>
					{/* AVC */}
					<div className={carouselItemClasses}>
						<div className={projectInfoClasses}>
							<div className={projectHeaderClasses}>
								<img src={ctwIcon} className={iconImgClasses} alt="CTW Icon" />
								<div className={projectTitleAndTypeClasses}>
									<h4 className={projectTitleClasses}>Interactive Campus Map</h4>
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
							<button className={learnMoreButtonClasses}>View Project</button>
						</div>
						<img src={ctwPhoneImage} className={mobileImageClasses} alt="CTW Mobile Image" />
					</div>
				</div>
				<button
					className={carouselControlPrevClasses}
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="prev">
					<span className={carouselControlPrevIconClasses} aria-hidden="true"></span>
					<span className={visuallyHiddenClasses}>Previous</span>
				</button>
				<button
					className={carouselControlNextClasses}
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="next">
					<span className={carouselControlNextIconClasses} aria-hidden="true"></span>
					<span className={visuallyHiddenClasses}>Next</span>
				</button>
			</div>
		</div>
	)
}

export default Projects
