import React, { useEffect, useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
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

const UpdateSeatType = () => {
	const classes = useStyles();
	// create state variables for each input
	const [seatTypeId, setSeatTypeId] = useState("");
	const [seatTypeDesc, setSeatTypeDesc] = useState("");
	const [seatFare, setSeatFare] = useState("");
	const navigate = useNavigate();
	const { stId } = useParams();

	useEffect(() => {
		SeatTypeService.getSeatTypeById(stId).then((res) => {
			let seatType = res.data;
			setSeatTypeId(seatType.seatTypeId);
			setSeatTypeDesc(seatType.seatTypeDesc);
			setSeatFare(seatType.seatFare);
		});
	}, [stId]);

	const handleClose = () => {
		navigate("/showseattype");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
			seatTypeId: seatTypeId,
			seatTypeDesc: seatTypeDesc,
			seatFare: seatFare,
		};
		console.log(responseBody);
		SeatTypeService.updateSeatType(responseBody).then((res) => {
			console.log(res.data);
			handleClose();
		});
	};

	return (
		<div
			style={{
				minHeight: "100vh",
				backgroundImage: "linear-gradient(to top, #37ecba 0%, #72afd3 100%)",
			}}
		>
			<form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
				<TextField
					label="SeatType Id"
					variant="filled"
					required
					disabled
					type="number"
					value={seatTypeId}
					color="secondary"
					onChange={(e) => setSeatTypeId(e.target.value)}
				/>
				<TextField
					label="Seat Desc"
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
						Update SeatType
					</Button>
				</div>
			</form>
		</div>
	);
};

export default UpdateSeatType;
