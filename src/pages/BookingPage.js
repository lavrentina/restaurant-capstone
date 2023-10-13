import BookingForm from "../components/BookingForm";

const BookingPage = (props) => {
	return (
		<section className="reservations">
			<div className="section-container">
				<h1>Reservations</h1>
				<p className="footnote">
					Fields marked with <span>*</span> are mandatory
				</p>
				<BookingForm
					availableTimes={props.availableTimes}
					dispatch={props.dispatch}
					submitForm={props.submitForm}
				/>
			</div>
		</section>
	);
};

export default BookingPage;
