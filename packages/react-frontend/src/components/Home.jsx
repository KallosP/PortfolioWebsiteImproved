import '../styles/home.css'

function Home() {
	return (
		<div class="container-fluid c-home">
			<h2 class="text-center">Peter Kallos</h2>
			<p class="text-center">
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
				<li class="d-inline-block mx-2">
					<a href="https://www.linkedin.com/in/peter-kallos/" target="_blank">
						<button>LinkedIn</button>
					</a>
				</li>
			</ul>
		</div>
	)
}
export default Home
