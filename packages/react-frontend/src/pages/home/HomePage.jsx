import Navbar from '../../components/Navbar'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Contact from './components/Contact'

function Home() {
	return (
		<div className="flex bg-secondary h-full w-full justify-center relative p-4">
			<Navbar />
			<div className="flex flex-col justify-center">
				<Introduction />
				{/*<Projects />
				<Contact />*/}
			</div>
		</div>
	)
}

export default Home
