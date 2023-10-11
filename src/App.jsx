import { Main } from './components/Main/main';
import { Footer } from './components/footer';
import { Header } from './components/header';

function App() {
	return (
		<div className='container mx-auto flex flex-col min-h-screen'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
