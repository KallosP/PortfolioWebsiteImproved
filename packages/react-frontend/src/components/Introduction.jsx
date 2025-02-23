import styles from '../styles/introduction.module.css'
import linkedInIcon from '../assets/svg-icons/linkedIn_button.svg'
import gitHubIcon from '../assets/svg-icons/GitHub_Button.svg'
import emailIcon from '../assets/svg-icons/Email_Button.svg'

function Introduction() {
	const fluidContainerDivClasses = [
		'container-fluid',
		'd-flex',
		'flex-column',
		'px-5',
		'text-start',
		'align-items-start',
		styles['c-div-content']
	].join(' ')
	const h1Classes = ['text-secondary', 'row', styles['c-h1']].join(' ')
	const divContainerForText = ['text-secondary', 'row', 'mb-2'].join(' ')
	const ulClasses = ['list-unstyled', 'row', 'mb-4'].join(' ')
	const liClasses = ['col'].join(' ')
	const firstLiClasses = [liClasses, 'ps-0'].join(' ')
	const buttonClasses = ['btn', 'enable-shadow', 'btn-primary', 'row', styles['c-btn']].join(' ')
	const pClasses = ['ps-0', styles['c-p']].join(' ')
	const strongClasses = ['text-primary'].join(' ')
	const imageButtonClasses = ['btn', styles['c-img-btn']].join(' ')
	const imgClasses = [styles['c-image']].join(' ')

	return (
		<div class={fluidContainerDivClasses}>
			<h1 class={h1Classes}>Peter Kallos</h1>
			<div class={divContainerForText}>
				<p className={pClasses}>
					I'm a fourth-year Computer Science student at Cal Poly, San Luis Obispo, with a strong
					interest in <strong className={strongClasses}>full-stack development</strong> and a
					particular focus on <strong className={strongClasses}>mobile apps</strong>. Explore my
					work and learn more about me below.
				</p>
			</div>
			<ul class={ulClasses}>
				<li class={firstLiClasses}>
					<a href="https://github.com/KallosP" target="_blank">
						<button type="button" className={imageButtonClasses}>
							<img src={gitHubIcon} alt="GitHubIcon" className={imgClasses} />
						</button>
					</a>
				</li>
				<li className={liClasses}>
					<a href="https://www.linkedin.com/in/peter-kallos/" target="_blank">
						<button type="button" className={imageButtonClasses}>
							<img src={linkedInIcon} alt="LinkedInIcon" className={imgClasses} />
						</button>
					</a>
				</li>
				<li className={liClasses}>
					<a href="mailto:pkallos19@gmail.com">
						<button type="button" className={imageButtonClasses}>
							<img src={emailIcon} alt="EmailIcon" className={imgClasses} />
						</button>
					</a>
				</li>
			</ul>
			<a href="/Peter_Kallos_Resume.pdf" download="Peter_Kallos_Resume.pdf">
				<button type="button" class={buttonClasses}>
					Download Resume
				</button>
			</a>
		</div>
	)
}
export default Introduction
