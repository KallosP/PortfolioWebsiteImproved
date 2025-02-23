import linkedInIcon from '../../../assets/svg-icons/linkedIn_button.svg'
import gitHubIcon from '../../../assets/svg-icons/GitHub_Button.svg'
import emailIcon from '../../../assets/svg-icons/Email_Button.svg'
import GlowingButton from '../../../components/GlowingButton'

function Introduction() {
	return (
		<div className="flex flex-col justify-center self-start mx-26  w-5/7 ">
			<h1 className="text-5xl lg:text-7xl font-medium">Peter Kallos</h1>
			<div className="mt-4">
				<p className="lg:text-xl">
					I'm a fourth-year Computer Science student at Cal Poly, San Luis Obispo, with a strong
					interest in <strong className="text-primary">full-stack development</strong> and a
					particular focus on <strong className="text-primary">mobile apps</strong>. Explore my work
					and learn more about me below.
				</p>
			</div>
			<ul className="flex mt-4 gap-4">
				<li className="cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:rotate-12">
					<a href="https://github.com/KallosP" target="_blank" rel="noopener noreferrer">
						<img src={gitHubIcon} alt="GitHub Icon" className="w-14 h-14" />
					</a>
				</li>
				<li className="cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:rotate-12">
					<a href="https://www.linkedin.com/in/peter-kallos/" target="_blank">
						<img src={linkedInIcon} alt="LinkedInIcon" className="w-14 h-14" />
					</a>
				</li>
				<li className="cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:rotate-12">
					<a href="mailto:pkallos19@gmail.com">
						<img src={emailIcon} alt="EmailIcon" className="w-14 h-14" />
					</a>
				</li>
			</ul>
			<div className="mt-4">
				<GlowingButton as="a" href="/Peter_Kallos_Resume.pdf">
					Download Resume
				</GlowingButton>
			</div>
		</div>
	)
}
export default Introduction
