import CTWGraphic from '../../assets/images/Feature_Graphic.png'
import gitHubIcon from '../../assets/svg-icons/GitHub_Button.svg'
import ctwImage1 from '../../assets/svg-icons/ctw-images/CTW-Image-1.svg'
import ctwImage2 from '../../assets/svg-icons/ctw-images/CTW-Image-2.svg'
import ctwImage3 from '../../assets/svg-icons/ctw-images/CTW-Image-3.svg'
import ctwImage4 from '../../assets/svg-icons/ctw-images/CTW-Image-4.svg'
import ctwImage5 from '../../assets/svg-icons/ctw-images/CTW-Image-5.svg'
import ctwImage6 from '../../assets/svg-icons/ctw-images/CTW-Image-6.svg'
import ctwImage7 from '../../assets/svg-icons/ctw-images/CTW-Image-7.svg'
import ctwGroupImage from '../../assets/images/CTW-group-pic.png'
import { Link } from 'react-router-dom'

function ProjectPage() {
	return (
		<div className="">
			<div className="">
				<Link to="/" className="">
					Back
				</Link>
			</div>

			<div className="">
				<img src={CTWGraphic} className=""></img>
			</div>

			<div className="">
				<section className="">
					<h1 className="">California Traffic Watch</h1>
					<ul className="">
						<li className="">
							<a
								href="https://www.amazon.in/Kape-California-Traffic-Watch/dp/B0DJ7XDY9T"
								target="_blank"
								className="text-decoration-none">
								<button className="">
									<svg
										width="50"
										height="50"
										viewBox="0 0 50 50"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M11.7779 16.5039H38.222V38.0531C38.222 39.3332 37.1841 40.3711 35.9055 40.3711H33.2568V46.9339C33.2568 48.6005 31.9275 49.9512 30.2866 49.9512C28.6415 49.9512 27.3141 48.6005 27.3141 46.9339V40.3711H22.688V46.9339C22.688 48.6005 21.3561 49.9512 19.7153 49.9512C18.0748 49.9512 16.7429 48.6005 16.7429 46.9339V40.3711H14.0965C12.8176 40.3711 11.7778 39.3332 11.7778 38.0531L11.7779 16.5039ZM6.59575 16.3281C4.93813 16.3281 3.59546 17.6916 3.59546 19.3749V31.2828C3.59546 32.9642 4.93813 34.3301 6.59575 34.3301C8.25366 34.3301 9.59605 32.9642 9.59605 31.2828V19.3749C9.59605 17.6916 8.25366 16.3281 6.59575 16.3281ZM38.2221 14.3325H11.7779C12.1042 10.5651 14.5481 7.32308 18.0662 5.44594L15.5519 1.75414C15.2128 1.25629 15.3408 0.57699 15.8396 0.238025C16.3378 -0.10094 17.0158 0.0279664 17.3565 0.525427L20.0968 4.55199C21.6162 4.0266 23.2654 3.72494 25 3.72494C26.7366 3.72494 28.3859 4.0266 29.9051 4.55267L32.6455 0.526892C32.982 0.0280641 33.6621 -0.100842 34.1603 0.238123C34.6591 0.577087 34.7871 1.25638 34.448 1.75424L31.9358 5.44603C35.4538 7.32201 37.8959 10.564 38.2221 14.3325ZM20.8852 9.21342C20.8852 8.40551 20.231 7.75023 19.4234 7.75023C18.6137 7.75023 17.9595 8.40551 17.9595 9.21342C17.9595 10.0209 18.6159 10.6759 19.4234 10.6759C20.2309 10.6759 20.8852 10.0209 20.8852 9.21342ZM32.2257 9.21342C32.2257 8.40551 31.5693 7.75023 30.7619 7.75023C29.9522 7.75023 29.3 8.40551 29.3 9.21342C29.3 10.0209 29.9522 10.6759 30.7619 10.6759C31.5694 10.6759 32.2257 10.0209 32.2257 9.21342ZM43.4062 16.3239C41.7503 16.3239 40.4039 17.6895 40.4039 19.3729V31.285C40.4039 32.9684 41.7503 34.3344 43.4062 34.3344C45.0642 34.3344 46.4043 32.9685 46.4043 31.285V19.3729C46.4044 17.6895 45.0642 16.3239 43.4062 16.3239Z"
											fill="#01FFAF"
										/>
									</svg>
									Download
								</button>
							</a>
						</li>
						<li className="">
							<a
								href="https://apps.apple.com/us/app/california-traffic-watch/id6736535022"
								target="_blank"
								className="text-decoration-none">
								<button className="">
									<svg
										width="50"
										height="50"
										viewBox="0 0 50 50"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M11.7779 16.5039H38.222V38.0531C38.222 39.3332 37.1841 40.3711 35.9055 40.3711H33.2568V46.9339C33.2568 48.6005 31.9275 49.9512 30.2866 49.9512C28.6415 49.9512 27.3141 48.6005 27.3141 46.9339V40.3711H22.688V46.9339C22.688 48.6005 21.3561 49.9512 19.7153 49.9512C18.0748 49.9512 16.7429 48.6005 16.7429 46.9339V40.3711H14.0965C12.8176 40.3711 11.7778 39.3332 11.7778 38.0531L11.7779 16.5039ZM6.59575 16.3281C4.93813 16.3281 3.59546 17.6916 3.59546 19.3749V31.2828C3.59546 32.9642 4.93813 34.3301 6.59575 34.3301C8.25366 34.3301 9.59605 32.9642 9.59605 31.2828V19.3749C9.59605 17.6916 8.25366 16.3281 6.59575 16.3281ZM38.2221 14.3325H11.7779C12.1042 10.5651 14.5481 7.32308 18.0662 5.44594L15.5519 1.75414C15.2128 1.25629 15.3408 0.57699 15.8396 0.238025C16.3378 -0.10094 17.0158 0.0279664 17.3565 0.525427L20.0968 4.55199C21.6162 4.0266 23.2654 3.72494 25 3.72494C26.7366 3.72494 28.3859 4.0266 29.9051 4.55267L32.6455 0.526892C32.982 0.0280641 33.6621 -0.100842 34.1603 0.238123C34.6591 0.577087 34.7871 1.25638 34.448 1.75424L31.9358 5.44603C35.4538 7.32201 37.8959 10.564 38.2221 14.3325ZM20.8852 9.21342C20.8852 8.40551 20.231 7.75023 19.4234 7.75023C18.6137 7.75023 17.9595 8.40551 17.9595 9.21342C17.9595 10.0209 18.6159 10.6759 19.4234 10.6759C20.2309 10.6759 20.8852 10.0209 20.8852 9.21342ZM32.2257 9.21342C32.2257 8.40551 31.5693 7.75023 30.7619 7.75023C29.9522 7.75023 29.3 8.40551 29.3 9.21342C29.3 10.0209 29.9522 10.6759 30.7619 10.6759C31.5694 10.6759 32.2257 10.0209 32.2257 9.21342ZM43.4062 16.3239C41.7503 16.3239 40.4039 17.6895 40.4039 19.3729V31.285C40.4039 32.9684 41.7503 34.3344 43.4062 34.3344C45.0642 34.3344 46.4043 32.9685 46.4043 31.285V19.3729C46.4044 17.6895 45.0642 16.3239 43.4062 16.3239Z"
											fill="#01FFAF"
										/>
									</svg>
									Download
								</button>
							</a>
						</li>
						<li className="">
							<a
								href="https://apps.apple.com/us/app/california-traffic-watch/id6736535022"
								target="_blank"
								className="">
								<button className="">
									<svg
										width="50"
										height="50"
										viewBox="0 0 50 50"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M42.1875 3.125H7.8125C5.225 3.125 3.125 5.225 3.125 7.8125V42.1875C3.125 44.775 5.225 46.875 7.8125 46.875H42.1875C44.775 46.875 46.875 44.775 46.875 42.1875V7.8125C46.875 5.225 44.775 3.125 42.1875 3.125ZM15.5281 37.5484C14.9906 38.4859 13.7891 38.7984 12.8625 38.2609C11.925 37.7234 11.6125 36.5219 12.15 35.5953L13.5469 33.1828C15.1188 32.7047 16.4078 33.075 17.4141 34.2953L15.5281 37.5484ZM29.0922 32.2859H11.3281C10.2531 32.2859 9.375 31.4062 9.375 30.3328C9.375 29.2594 10.2547 28.3797 11.3281 28.3797H16.3094L22.6953 17.325L20.6938 13.8688C20.1562 12.9313 20.4797 11.7391 21.4062 11.2031C22.3438 10.6656 23.5359 10.9891 24.0719 11.9156L24.9406 13.4188L25.8094 11.9156C26.3469 10.9781 27.5484 10.6656 28.475 11.2031C29.4125 11.7406 29.725 12.9422 29.1875 13.8688L20.8094 28.3812H26.8734C28.8453 28.3812 29.95 30.6953 29.0906 32.2875L29.0922 32.2859ZM38.6719 32.2859H35.8391L37.7531 35.5969C38.2906 36.5344 37.9672 37.7266 37.0406 38.2625C36.1031 38.8 34.9109 38.4766 34.375 37.55C31.1625 31.9937 28.7594 27.8141 27.1484 25.0406C25.5172 22.2078 26.6797 19.3766 27.8422 18.4203C29.1219 20.6375 31.0359 23.9578 33.5938 28.3812H38.6719C39.7469 28.3812 40.625 29.2609 40.625 30.3344C40.625 31.4187 39.7453 32.2859 38.6719 32.2859Z"
											fill="#50FFB3"
										/>
									</svg>
									Download
								</button>
							</a>
						</li>
						<li className="">
							<a
								href="https://github.com/KallosP/CaliforniaTrafficWatchPreview"
								target="_blank"
								className="">
								<button type="button" className="">
									<img src={gitHubIcon} alt="LinkedIn" className="" />
								</button>
							</a>
						</li>
					</ul>
					<p className="">
						California Traffic Watch is a traffic app I built with the purpose of helping California
						drivers avoid delays and plan their trips with more assurance, offering up-to-date
						traffic information sourced directly from Caltrans' Commercial Wholesale Web Portal and
						CHP's Traffic Incident Page.
					</p>
				</section>
				<img src={ctwGroupImage} className=""></img>
				<section className={otherSectionClasses}>
					<h2 className={h2Classes}>Displaying the Data</h2>
					<p className="">
						The app fetches thousands of data records from JSON files provided by Caltrans,
						containing detailed information on closed-circuit television (CCTV) cameras, lane
						closures, and chain control signs across California's 12 districts. Additionally, it
						fetches CHP incident data from an XML file, which is converted to JSON. These datasets
						are processed into custom TypeScript types, allowing easy access to the coordinates of
						individual traffic items, which are used to render them as map markers.
					</p>
					<h2 className="">Mapping, Location, and Storage Features</h2>
					<p className="">
						I used the Google Maps SDK and React Native Map Clustering module to set up the
						interactive map and manage marker clustering. These tools enabled the display of a
						real-time traffic layer, precise user location tracking, and efficient marker
						clustering. Additionally, persistent user preferences and theme settings were
						implemented using AsyncStorage and React's Context API.
					</p>
					<h2 className="">Mapping, Location, and Storage Features</h2>
					<p className="">
						A large issue in development was the slow rendering of thousands of markers. Using React
						Developer Tools to profile the app provided valuable insights, which led me to using
						component memoization. This optimization effectively reduced unnecessary re-renders,
						significantly improving the efficiency of marker rendering.
					</p>
				</section>
			</div>
		</div>
	)
}

export default ProjectPage
