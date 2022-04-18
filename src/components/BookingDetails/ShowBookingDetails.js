import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingDetailsService from "../../Services/BookingDetailsService";
import BookingDetail from "./BookingDetail";
import styles from "./ShowBookingDetails.module.css";
function ShowBookingDetails() {
	const [bookingDetails, setBookingDetails] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		BookingDetailsService.getBookingDetails().then((res) => {
			setBookingDetails(res.data);
		});
	}, []);
	const onAddHandle = () => {
		navigate("/addbookingdetails");
	};
	return (
		<div className={styles.bookingdetails}>
			<h1>All BookingDetails</h1>
			<Button variant="outlined" onClick={onAddHandle} color="secondary" className={styles.addbtn}>
				Add Booking Details
			</Button>
			<div className={styles.bookingdetailscontainer}>
				{bookingDetails.map((bookingDetail) => (
					<BookingDetail key={bookingDetail.id} bookingDetail={bookingDetail} />
				))}
			</div>
		</div>
	);
}

export default ShowBookingDetails;
