import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
	return (
		<footer>
			<img src={logo} alt="Little Lemon logo" />
			<nav>
				<h3>Doormat Navigation</h3>
				<ul>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/menu">Menu</Link>
					<Link to="/">Reservations</Link>
					<Link to="/">Order Online</Link>
					<Link to="/">Log In</Link>
				</ul>
			</nav>
			<div>
				<h3>Contact</h3>
				<ul>
					<li>ul. Przyokopowa,26 </li>
					<li>+48 012 345 678</li>
					<li>E-mail</li>
				</ul>
			</div>
			<div>
				<h3>Social Media Links</h3>
				<ul>
					<li>
						<a href="https://instagram.com">Instagram</a>
					</li>
					<li>
						<a href="https://facebook.com">Facebook</a>
					</li>
					<li>
						<a href="https://x.com">X (former Twitter)</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
