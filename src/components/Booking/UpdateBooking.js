import React, { useEffect, useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import BookingService from "../../Services/BookingService";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: theme.spacing(2),

		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "300px",
		},
		"& .MuiButtonBase-root": {
			margin: theme.spacing(2),
		},
	},
}));

const UpdateBooking = () => {
	const classes = useStyles();
	// create state variables for each input
	const [bookingId, setBookingId] = useState("");
	const [bookedDate, setBookedDate] = useState("");
	const [showDate, setShowDate] = useState("");
	const [showId, setShowId] = useState("");
	const [userId, setUserId] = useState("");
	const navigate = useNavigate();
	const { bId } = useParams();

	useEffect(() => {
		BookingService.getBookingById(bId).then((res) => {
			let booking = res.data;
			setBookingId(booking.bookingId);
			setBookedDate(booking.bookedDate);
			setShowDate(booking.showDate);
			setShowId(booking.shows.showId);
			setUserId(booking.users.userId);
		});
	}, []);

	const handleClose = () => {
		navigate("/showbookings");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
			bookingId: bookingId,
			bookedDate: bookedDate,
			showDate: showDate,
			shows: {
				showId: showId,
			},
			users: {
				userId: userId,
			},
		};
		console.log(responseBody);
		BookingService.updateBooking(responseBody).then((res) => {
			console.log(res.data);
			handleClose();
		});
	};

	return (
		<form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
			<TextField
				label="Create Booking ID"
				variant="filled"
				required
				disabled
				value={bookingId}
				color="secondary"
				onChange={(e) => setBookingId(e.target.value)}
			/>
			<TextField
				label="Booking Date"
				variant="filled"
				required
				type="date"
				InputLabelProps={{ shrink: true }}
				value={bookedDate}
				color="secondary"
				onChange={(e) => setBookedDate(e.target.value)}
			/>
			<TextField
				label="Show Date"
				variant="filled"
				required
				type="date"
				InputLabelProps={{ shrink: true }}
				value={showDate}
				color="secondary"
				onChange={(e) => setShowDate(e.target.value)}
			/>

			<TextField
				label="Show Id"
				variant="filled"
				required
				value={showId}
				color="secondary"
				onChange={(e) => setShowId(e.target.value)}
			/>
			<TextField
				label="User Id"
				variant="filled"
				required
				value={userId}
				color="secondary"
				onChange={(e) => setUserId(e.target.value)}
			/>
			<div>
				<Button variant="contained" onClick={handleClose}>
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					Update Booking
				</Button>
			</div>
		</form>
	);
};

export default UpdateBooking;
