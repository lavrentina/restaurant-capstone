import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
	return (
		<footer>
			<div className="section-container footer-wrapper">
				<div className="col">
					<img src={logo} alt="Little Lemon logo" />
				</div>
				<div className="col">
					<h3>Navigation</h3>
					<ul className="contact">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/reservations">Reservations</Link>
						<Link to="/order-online">Order Online</Link>
						<Link to="/login">Log In</Link>
					</ul>
				</div>
				<div className="col">
					<h3>Contact</h3>
					<ul className="contact">
						<li>str. Beautiful, 100 </li>
						<li>+48 012 345 678</li>
						<li>email@company.com</li>
					</ul>
				</div>
				<div className="col">
					<h3>Social Media Links</h3>
					<ul className="contact">
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
			</div>
		</footer>
	);
};

export default Footer;
