import DishCards from "./DishCards";
import Testimonials from "./Testimonials";
import AboutSection from "./AboutSection";
import restaurant from "../assets/restaurant.jpg";

const Main = () => {
	return (
		<main>
			<section className="hero">
				<div className="background">
					<img src={restaurant} alt="restaurant" />
				</div>
				<div className="section-container hero-intro">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						Little Lemon is a charming neigborhood bistro that serves simple
						food and classic cocktails in a lively but casual environment. The
						restaurant features a locally-sourced menu with daily specials.
					</p>
					<button className="primary-button">Reserve a table</button>
				</div>
			</section>

			<section className="section-container specials">
				<div className="specials-wrapper">
					<h1>This Week's Specials!</h1>
					<button className="primary-button">Online Menu</button>
				</div>
				<DishCards />
			</section>
			<Testimonials />
			<AboutSection />
		</main>
	);
};

export default Main;
