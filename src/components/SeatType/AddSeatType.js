import React, { useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import SeatTypeService from "../../Services/SeatTypeService";

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

const AddSeatType = () => {
	const classes = useStyles();
	// create state variables for each input
	const [seatTypeId, setSeatTypeId] = useState("");
	const [seatTypeDesc, setSeatTypeDesc] = useState("");
	const [seatFare, setSeatFare] = useState("");

	const navigate = useNavigate();
	const handleClose = () => {
		navigate("/showseattypes");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
			seatTypeId: seatTypeId,
			seatTypeDesc: seatTypeDesc,
			seatFare: seatFare,
		};
		SeatTypeService.createSeatType(responseBody).then((res) => {
			console.log(res);
			handleClose();
		});
	};

	return (
		<form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
			<TextField
				label="Create SeatType ID"
				variant="filled"
				required
				value={seatTypeId}
				color="secondary"
				onChange={(e) => setSeatTypeId(e.target.value)}
			/>
			<TextField
				label="Seat Description"
				variant="filled"
				required
				type="text"
				// InputLabelProps={{ shrink: true }}
				value={seatTypeDesc}
				color="secondary"
				onChange={(e) => setSeatTypeDesc(e.target.value)}
			/>
			<TextField
				label="Seat Fair"
				variant="filled"
				required
				type="number"
				// InputLabelProps={{ shrink: true }}
				value={seatFare}
				color="secondary"
				onChange={(e) => setSeatFare(e.target.value)}
			/>

			<div>
				<Button variant="contained" onClick={handleClose}>
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					Add Seat
				</Button>
			</div>
		</form>
	);
};

export default AddSeatType;
