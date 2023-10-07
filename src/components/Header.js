import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Header = () => {
	return (
		<header>
			<img src={logo} alt="Little Lemon Logo" />
			<nav>
				<ul>
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
