import styles from "./Booking.module.css";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import BookingService from "../../Services/BookingService";
export default function Booking({ booking }) {
	const navigate = useNavigate();
	const onDeleteHandle = (id) => {
		BookingService.deleteBooking(id).then((res) => {
			console.log(res);
			window.location.reload();
		});
	};
	const onUpdateHandle = (id) => {
		navigate("/updatebooking");
	};
	return (
		<div className={styles.bookingcard}>
			<h2>Booked By: {booking.users.userName}</h2>
			<h4>Booking Id: {booking.bookingId}</h4>
			<h4>Movie: {booking.shows.movies.movieName}</h4>
			<h4>Booking Date: {booking.bookedDate}</h4>
			<h4>Show Date: {booking.showDate}</h4>
			<Button
				variant="contained"
				onClick={() => onUpdateHandle(booking.bookingId)}
				style={{ backgroundColor: "yellow", marginLeft: "25px" }}
			>
				Update
			</Button>
			<Button
				variant="contained"
				onClick={() => onDeleteHandle(booking.bookingId)}
				style={{ backgroundColor: "red", marginLeft: "75px" }}
			>
				Delete
			</Button>
		</div>
	);
}
