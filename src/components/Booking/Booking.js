import styles from "./Booking.module.css";
import { Button } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import BookingService from "../../Services/BookingService";

export default function Booking({ booking }) {
	const navigate = useNavigate();
	const onDeleteHandle = () => {
		BookingService.deleteBooking(booking.bookingId).then((res) => {
			console.log(res);
			window.location.reload();
		});
	};
	const onUpdateHandle = () => {
		navigate(`/updatebooking/${booking.bookingId}`);
	};
	return (
		<div className={styles.bookingcard}>
			<h2>Booked By: {booking.users.userName}</h2>
			<h4>Booking Id: {booking.bookingId}</h4>
			<h4>Movie: {booking.shows.movies.movieName}</h4>
			<h4>Booking Date: {booking.bookedDate}</h4>
			<h4>Show Date: {booking.showDate}</h4>
			<h4>Show Time: {booking.shows.showTime}</h4>
			<Button
				variant="contained"
				startIcon={<Edit />}
				onClick={onUpdateHandle}
				style={{ backgroundColor: "yellow", marginLeft: "25px" }}
			>
				Update
			</Button>
			<Button
				variant="contained"
				startIcon={<Delete />}
				onClick={onDeleteHandle}
				style={{ backgroundColor: "red", marginLeft: "75px" }}
			>
				Delete
			</Button>
		</div>
	);
}
