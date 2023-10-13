import { useState } from "react";

const BookingForm = (props) => {
	const [date, setDate] = useState("");
	const [times, setTimes] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("");

	const handleChange = (e) => {
		setDate(e);
		props.dispatch(e);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.submitForm(e);
	};

	return (
		<form onSubmit={handleSubmit} className="reservations-form">
			<div className="two-column">
				<div className="col-left">
					<label htmlFor="res-date">Choose Date</label>
					<input
						type="date"
						id="res-date"
						required
						value={date}
						onChange={(e) => handleChange(e.target.value)}
					/>
				</div>
				<div className="col-right">
					<label htmlFor="res-time">Choose Time</label>
					<select
						id="res-time"
						required
						value={times}
						onChange={(e) => setTimes(e.target.value)}
					>
						<option value="">Select Time</option>
						{props.availableTimes.availableTimes.map((availableTimes) => {
							return <option key={availableTimes}>{availableTimes}</option>;
						})}
					</select>
				</div>
			</div>
			<div className="two-column">
				<div className="col-left">
					<label htmlFor="guests">Number of Guests</label>
					<input
						type="number"
						id="guests"
						required
						value={guests}
						min={1}
						max={10}
						onChange={(e) => setGuests(e.target.value)}
					/>
				</div>
				<div className="col-right">
					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						required
						key={occasion}
						value={occasion}
						onChange={(e) => setOccasion(e.target.value)}
					>
						<option>Birthday</option>
						<option>Engagement</option>
						<option>Anniversary</option>
						<option>None</option>
					</select>
				</div>
			</div>

			<input
				className="primary-button"
				aria-label="On Click"
				type="submit"
				value={"Make Your Reservation"}
			/>
		</form>
	);
};

export default BookingForm;
