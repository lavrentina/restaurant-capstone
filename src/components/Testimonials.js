import rating1 from "../assets/dish1.jpg";
import rating2 from "../assets/dish2.jpg";
import rating3 from "../assets/dish3.jpg";
import rating4 from "../assets/dish4.jpg";

const reviews = [
	{
		image: rating1,
		description: "A perfect choice for people loving fresh berries and pastry!",
		grade: "★★★★✩",
	},
	{
		image: rating2,
		description: "Best pancakes I've ever had in my entire life. Recommend.",
		grade: "★★★★✩",
	},
	{
		image: rating3,
		description:
			"Perfect salad for the lunch time. Additional star for avocado!",
		grade: "★★★★★",
	},
	{
		image: rating4,
		description: "Ideal cold soup during hot summer days.",
		grade: "★★★✩✩",
	},
];

const RatingCard = ({ image, description, grade }) => {
	return (
		<div className="rating-card">
			<h4>Rating</h4>
			<div className="two-column">
				<img src={image} className="col-left" />
				<p className="col-right secondary-text">{description}</p>
			</div>
			<span>{grade}</span>
		</div>
	);
};

const RatingCards = () => {
	return (
		<div className="cards-container">
			{reviews.map((review) => (
				<RatingCard
					key={review.title}
					title={review.title}
					grade={review.grade}
					description={review.description}
					image={review.image}
				/>
			))}
		</div>
	);
};

const Testimonials = () => {
	return (
		<section className="testimonials">
			<div className="section-container testimonials-wrapper">
				<h1>Testimonials</h1>
				<RatingCards />
			</div>
		</section>
	);
};

export default Testimonials;
