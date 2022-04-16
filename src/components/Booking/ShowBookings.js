import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingService from "../../Services/BookingService";
import Booking from "./Booking";
import styles from "./ShowBookings.module.css";
function ShowBookings() {
	const [bookings, setBookings] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		BookingService.getBookings().then((res) => {
			setBookings(res.data);
		});
	}, []);
	const onAddHandle = () => {
		navigate("/addbooking");
	};
	return (
		<div className={styles.bookings}>
			<h1>All Bookings</h1>
			<Button variant="outlined" onClick={onAddHandle} color="secondary" className={styles.addbtn}>
				Add Booking
			</Button>
			<div className={styles.bookingcontainer}>
				{bookings.map((booking) => (
					<Booking key={booking.bookingId} booking={booking} />
				))}
			</div>
		</div>
	);
}

export default ShowBookings;
