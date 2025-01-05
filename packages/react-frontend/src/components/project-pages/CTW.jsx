import styles from '../../styles/ctw-page.module.css'
import prevArrowIcon from '../../assets/svg-icons/prev-arrow.svg'
import { Link } from 'react-router-dom'

function ProjectPage() {
	const fluidContainerDivClasses = ['container-fluid', styles['c-fluid-container']].join(' ')
	const backButtonClasses = [styles['c-back-button']].join(' ')

	return (
		<div className={fluidContainerDivClasses}>
			<Link to="/" className={backButtonClasses}>
				<img src={prevArrowIcon} />
			</Link>
		</div>
	)
}

export default ProjectPage
