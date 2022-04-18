import styles from "./BookingDetails.module.css";
import { Button } from "@material-ui/core";
import BookingDetailsService from "../../Services/BookingDetailsService";

export default function Booking({ bookingDetail }) {
	const onDeleteHandle = () => {
		BookingDetailsService.deleteBookingDetail(bookingDetail.id).then((res) => {
			console.log(res);
			window.location.reload();
		});
	};
	return (
		<div className={styles.bookingdeatilcard}>
			<h2>Booking Detail Id: {bookingDetail.id}</h2>
			<h4>No. Of Seats: {bookingDetail.noOfSeats}</h4>
			<h4>Show Date: {bookingDetail.seatType.seatTypeDesc}</h4>
			<h4>Total Amount: {eval(bookingDetail.seatType.seatFare * bookingDetail.noOfSeats)}</h4>
			<Button
				variant="contained"
				onClick={onDeleteHandle}
				style={{ backgroundColor: "red", marginLeft: "125px" }}
			>
				Delete
			</Button>
		</div>
	);
}
