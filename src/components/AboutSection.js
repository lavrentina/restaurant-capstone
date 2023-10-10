import cook from "../assets/cook.jpg";

const AboutSection = () => {
	return (
		<section className="section-container two-column about">
			<div className="col-left">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					Little Lemon is a charming neigborhood bistro that serves simple food
					and classic cocktails in a lively but casual environment. The
					restaurant features a locally-sourced menu with daily specials.
				</p>
			</div>
			<div className="col-right">
				<img src={cook} />
			</div>
		</section>
	);
};

export default AboutSection;
