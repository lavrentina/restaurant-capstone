import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";

function App() {
	return (
		<>
			<Header />
			<Main />
			<AppRouter />
			<Footer />
		</>
	);
}

export default App;
