import styles from '../../styles/ctw-page.module.css'
import prevArrowIcon from '../../assets/svg-icons/prev-arrow.svg'
import CTWGraphic from '../../assets/images/Feature_Graphic.png'
import { Link } from 'react-router-dom'

function ProjectPage() {
	const fluidContainerDivClasses = [
		'container-fluid',
		'col',
		'text-center',
		styles['c-fluid-container']
	].join(' ')
	const backButtonContainerClasses = [
		'fixed-top',
		'mx-3',
		'my-3',
		styles['c-back-button-container']
	].join(' ')
	const headerImageContainerClasses = ['row',styles['c-header-image-container']].join(' ')
	const headerImageClasses = [styles['c-header-image']].join(' ')
	const infoContainerClasses = ['row', styles['c-info-container']].join(' ')

	return (
		<div className={fluidContainerDivClasses}>
			<div className={backButtonContainerClasses}>
				<Link to="/" className={styles['c-back-button']}>
					Back
				</Link>
			</div>

			<div className={headerImageContainerClasses}>
				<img src={CTWGraphic} className={headerImageClasses}></img>
			</div>

			<div className={infoContainerClasses}>
				<p className={'text-secondary'}>Test</p>
			</div>
		</div>
	)
}

export default ProjectPage
