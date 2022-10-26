import "./App.css";
import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
	return (
		<section className="App">
			<Info />
			<About />
			<Interests />
			<Footer />
		</section>
	);
}

export default App;
