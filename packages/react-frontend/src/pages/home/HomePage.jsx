import Navbar from '../../components/Navbar'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Contact from './components/Contact'

function Home() {
	return (
		<div className="flex bg-secondary h-full w-full justify-center relative p-4">
			<Navbar />
			{/*<Introduction />
			<Projects />
			<Contact />*/}
		</div>
	)
}

export default Home
