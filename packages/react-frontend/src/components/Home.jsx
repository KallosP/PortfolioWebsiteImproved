import styles from '../styles/home.module.css'

function Home() {
	const fluidContainerDivClasses = [
		'container-fluid',
		'd-flex',
		'flex-column',
		'px-5',
		'border',
		'align-items-start',
		styles['c-div-content']
	].join(' ')
	const h2Classes = ['text-center', 'text-secondary'].join(' ')
	const pClasses = ['text-center', 'text-secondary', styles['c-home-p']].join(' ')
	const ulClasses = ['list-unstyled', 'text-center'].join(' ')
	const liClasses = ['d-inline-block', 'mx-2'].join(' ')
	const buttonClasses = ['btn', 'btn-primary'].join(' ')

	return (
		<div class={fluidContainerDivClasses}>
			<h2 class={h2Classes}>Peter Kallos</h2>
			<p class={pClasses}>
				I'm a fourth-year Computer Science student at Cal Poly, San Luis Obispo, with a strong
				interest in full-stack development and a particular focus on mobile apps. Explore my work
				and learn more about me below.
			</p>
			<ul class={ulClasses}>
				<li class={liClasses}>
					<a href="https://github.com/KallosP" target="_blank">
						<button>GitHub</button>
					</a>
				</li>
				<li className={liClasses}>
					<a href="https://www.linkedin.com/in/peter-kallos/" target="_blank">
						<button>LinkedIn</button>
					</a>
				</li>
				<li className={liClasses}>
					<a href="mailto:pkallos19@gmail.com">
						<button>Email</button>
					</a>
				</li>
			</ul>
			<button type="button" class={buttonClasses}>
				Base class
			</button>
		</div>
	)
}
export default Home
