import { Link } from "react-router-dom";
import restaurant from "../assets/restaurant.jpg";

const Home = () => {
	return (
		<section className="hero">
			<div className="background">
				<img src={restaurant} alt="restaurant" />
			</div>
			<div className="section-container hero-intro">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					Little Lemon is a charming neigborhood bistro that serves simple food
					and classic cocktails in a lively but casual environment. The
					restaurant features a locally-sourced menu with daily specials.
				</p>
				<Link to="/reservations">
					<button className="primary-button" aria-label="On Click">
						Reserve a table
					</button>
				</Link>
			</div>
		</section>
	);
};

export default Home;
