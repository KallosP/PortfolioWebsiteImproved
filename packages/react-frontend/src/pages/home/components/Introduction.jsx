import linkedInIcon from '../../../assets/svg-icons/linkedIn_button.svg'
import gitHubIcon from '../../../assets/svg-icons/GitHub_Button.svg'
import emailIcon from '../../../assets/svg-icons/Email_Button.svg'

function Introduction() {
	return (
		<div className="">
			<h1 className="">Peter Kallos</h1>
			<div className="">
				<p className="">
					I'm a fourth-year Computer Science student at Cal Poly, San Luis Obispo, with a strong
					interest in <strong className="">full-stack development</strong> and a particular focus on{' '}
					<strong className="">mobile apps</strong>. Explore my work and learn more about me below.
				</p>
			</div>
			<ul className="">
				<li className="">
					<a href="https://github.com/KallosP" target="_blank">
						<button type="button" className="">
							<img src={gitHubIcon} alt="GitHubIcon" className="" />
						</button>
					</a>
				</li>
				<li className="">
					<a href="https://www.linkedin.com/in/peter-kallos/" target="_blank">
						<button type="button" className="">
							<img src={linkedInIcon} alt="LinkedInIcon" className="" />
						</button>
					</a>
				</li>
				<li className="">
					<a href="mailto:pkallos19@gmail.com">
						<button type="button" className="">
							<img src={emailIcon} alt="EmailIcon" className="" />
						</button>
					</a>
				</li>
			</ul>
			<a href="/Peter_Kallos_Resume.pdf" download="Peter_Kallos_Resume.pdf">
				<button type="button" className="">
					Download Resume
				</button>
			</a>
		</div>
	)
}
export default Introduction
