import { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "./Menu";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";

const Main = () => {
	const seededRandom = function (seed) {
		var m = 2 ** 35 - 31;
		var a = 185852;
		var s = seed % m;
		return function () {
			return (s = (s * a) % m) / m;
		};
	};

	const fetchAPI = function (date) {
		let result = [];
		let random = seededRandom(date.getDate());

		for (let i = 14; i <= 21; i++) {
			if (random() < 0.5) {
				result.push(i + ":00");
			}
			if (random() < 0.5) {
				result.push(i + ":30");
			}
		}
		return result;
	};

	const submitAPI = function (formData) {
		return true;
	};

	const initialState = { availableTimes: fetchAPI(new Date()) };
	const [state, dispatch] = useReducer(updateTimes, initialState);

	function updateTimes(state, date) {
		return { availableTimes: fetchAPI(new Date(date)) };
	}
	const navigate = useNavigate();
	function submitForm(formData) {
		if (submitAPI(formData)) {
			navigate("/confirmed");
		}
	}

	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<Menu />} />
				<Route
					path="/reservations"
					element={
						<BookingPage
							availableTimes={state}
							dispatch={dispatch}
							submitForm={submitForm}
						/>
					}
				/>
				<Route path="/confirmed" element={<ConfirmedBooking />} />
				<Route path="/order-online" element={<OrderOnline />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</main>
	);
};

export default Main;
