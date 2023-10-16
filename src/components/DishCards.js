import salad from "../assets/greek-salad.jpg";
import lemon from "../assets/lemon-dessert.jpg";
import icon from "../assets/motorcycle-icon.svg";
import bruschetta from "../assets/bruschetta.jpg";

const dishes = [
	{
		title: "Greek Salad Space",
		price: 12.55,
		description:
			"Greek salad, also known as Horiatiki, is served with feta cheese, olives, bell peppers, tomatoes, cucumbers, oil and vinegar in our traditional Mediterannean recipe.",
		image: salad,
	},
	{
		title: "Lemon Dessert",
		price: 29.99,
		description:
			"Lemon pie is a dessert which consists of a shortened pastry base filled with lemon curd and topped with meringue.",
		image: lemon,
	},
	{
		title: "Tomato Bruschetta",
		price: 9.99,
		description:
			"An antipasto (starter dish) from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. This variation includes toppings of tomato and cheese.",
		image: bruschetta,
	},
];

const DishCard = ({ title, price, description, image }) => {
	return (
		<div className="dish-card">
			<img src={image} alt="dish" />
			<div className="dish-card-text">
				<div className="dish-card-heading">
					<h4>{title}</h4>
					<span>${price}</span>
				</div>
				<p className="secondary-text">{description}</p>
			</div>
			<button className="secondary-button with-icon">
				Order a delivery
				<img src={icon} alt="motorcycle icon" />
			</button>
		</div>
	);
};

const DishCards = () => {
	return (
		<div className="cards-container">
			{dishes.map((dish) => (
				<DishCard
					key={dish.title}
					title={dish.title}
					price={dish.price}
					description={dish.description}
					image={dish.image}
				/>
			))}
		</div>
	);
};

export default DishCards;
