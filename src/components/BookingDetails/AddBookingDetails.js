import React, { useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import BookingDetailsService from "../../Services/BookingDetailsService";
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

const AddBookingDetails = () => {
	const classes = useStyles();
	// create state variables for each input
	// const [id, setId] = useState("");
	const [noOfSeats, setnoOfSeats] = useState("");
	const [bookingId, setbookingId] = useState("");
	const [seatTypeId, setseatTypeId] = useState("");
	const navigate = useNavigate();

	const handleClose = () => {
		navigate("/showbookingdetails");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
			// id: id,
			noOfSeats: noOfSeats,
			booking: {
				bookingId: bookingId,
			},
			seatType: {
				seatTypeId: seatTypeId,
			},
		};
		BookingDetailsService.createBookingDetail(responseBody).then((res) => {
			console.log(res);
			handleClose();
		});
	};

	return (
		<form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
			{/* <TextField
				label="Create BookingDetail ID"
				variant="filled"
				required
				value={id}
				color="secondary"
				onChange={(e) => setId(e.target.value)}
			/> */}
			<TextField
				label="No Of Seats"
				npm
				variant="filled"
				required
				type="text"
				value={noOfSeats}
				color="secondary"
				onChange={(e) => setnoOfSeats(e.target.value)}
			/>
			<TextField
				label="Booking Id"
				variant="filled"
				required
				value={bookingId}
				color="secondary"
				onChange={(e) => setbookingId(e.target.value)}
			/>
			<TextField
				label="SetType Id"
				variant="filled"
				required
				value={seatTypeId}
				color="secondary"
				onChange={(e) => setseatTypeId(e.target.value)}
			/>
			<div>
				<Button variant="contained" onClick={handleClose}>
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					Add Booking Detail
				</Button>
			</div>
		</form>
	);
};

export default AddBookingDetails;
