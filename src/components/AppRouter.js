import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/about" element={<About />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/reservations" element={<Reservations />} />
			<Route path="/order-online" element={<OrderOnline />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default AppRouter;
