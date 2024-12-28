import '../styles/home.css'

function Home() {
	return (
		<div class="container-fluid d-flex flex-column px-5 border align-items-start c-div-content">
			<h2 class="text-center text-secondary">Peter Kallos</h2>
			<p class="text-center text-secondary c-home-p">
				I'm a fourth-year Computer Science student at Cal Poly, San Luis Obispo, with a strong
				interest in full-stack development and a particular focus on mobile apps. Explore my work
				and learn more about me below.
			</p>
			<ul class="list-unstyled text-center">
				<li class="d-inline-block mx-2">
					<a href="https://github.com/KallosP" target="_blank">
						<button>GitHub</button>
					</a>
				</li>
				<li className="d-inline-block mx-2">
					<a href="https://www.linkedin.com/in/peter-kallos/" target="_blank">
						<button>LinkedIn</button>
					</a>
				</li>
				<li className="d-inline-block mx-2">
					<a href="mailto:pkallos19@gmail.com">
						<button>Email</button>
					</a>
				</li>
			</ul>
			<button type="button" class="btn btn-primary">
				Base class
			</button>
		</div>
	)
}
export default Home
