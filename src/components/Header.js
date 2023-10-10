import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Header = () => {
	return (
		<header>
			<nav className="navbar">
				<img src={logo} alt="Little Lemon Logo" />
				<ul className="menu">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/menu">Menu</Link>
					<Link to="/reservations">Reservations</Link>
					<Link to="/order-online">Order Online</Link>
					<Link to="/login">Log In</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
