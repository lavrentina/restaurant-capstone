import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import Hamburger from "./Hamburger";

const Nav = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<header>
			<nav className="navbar">
				<img src={logo} alt="Little Lemon Logo" />
				<ul className="menu">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/reservations">Reservations</Link>
					<Link to="/order-online">Order Online</Link>
					<Link to="/login">Log In</Link>
				</ul>
				<div className="hamburger" onClick={toggleHamburger}>
					<Hamburger isOpen={hamburgerOpen} />
				</div>
				<ul className="mobile-nav">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/reservations">Reservations</Link>
					<Link to="/order-online">Order Online</Link>
					<Link to="/login">Log In</Link>
				</ul>
			</nav>

			<style jsx="true">
				{`
					.mobile-nav {
						display: ${hamburgerOpen ? "flex" : "none"};
					}
				`}
			</style>
		</header>
	);
};

export default Nav;
