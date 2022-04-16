import React, { useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";

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

const Signup = () => {
	const classes = useStyles();
	// create state variables for each input
	const [userID, setuserID] = useState("");
	const [userName, setUserName] = useState("");
	const [userType, setuserType] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const navigate = useNavigate();
	const handleClose = () => {
		navigate("/login");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
			userId: userID,
			userName: userName,
			userType: userType,
			emailId: email,
			password: password,
			mobileNumber: mobileNumber,
		};

		UserService.saveUsers(responseBody).then((res) => {
			console.log(res);
			handleClose();
		});
	};

	return (
		<form className={classes.root} onSubmit={handleSubmit}>
			<TextField
				label="Create UserID"
				variant="filled"
				required
				value={userID}
				data-testid="userId"
				onChange={(e) => setuserID(e.target.value)}
			/>
			<TextField
				label="Full Name"
				variant="filled"
				required
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<TextField
				label="Enter User Type"
				variant="filled"
				required
				value={userType}
				onChange={(e) => setuserType(e.target.value)}
			/>

			<TextField
				label="Email"
				variant="filled"
				type="email"
				required
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				label="Password"
				variant="filled"
				type="password"
				required
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<TextField
				label="Contact Number"
				variant="filled"
				required
				value={mobileNumber}
				onChange={(e) => setMobileNumber(e.target.value)}
			/>
			<div>
				<Button variant="contained" onClick={handleClose}>
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					Signup
				</Button>
			</div>
		</form>
	);
};

export default Signup;
