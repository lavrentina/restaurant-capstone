import DishCards from "./DishCards";
import Testimonials from "./Testimonials";

const Menu = () => {
	return (
		<main>
			<section className="section-container specials">
				<div className="specials-wrapper">
					<h1>This Week's Specials!</h1>
					<button className="primary-button">Online Menu</button>
				</div>
				<DishCards />
			</section>
			<Testimonials />
		</main>
	);
};

export default Menu;
