import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles, TextField, Button } from "@material-ui/core";

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

const SignUp = () => {
	const classes = useStyles();
	// create state variables for each input
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleClose = () => {
		navigate("/login");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userName, password);
		if (userName === "Nimesh" && password === "Pass@123") {
			navigate("/");
		} else {
			alert("Wrong Username or Password");
			handleClose();
		}
	};

	return (
		<form className={classes.root} onSubmit={handleSubmit}>
			<TextField
				label="User Name"
				variant="filled"
				required
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<TextField
				label="Password"
				variant="filled"
				type="password"
				required
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<div>
				<Button type="submit" variant="contained" color="primary">
					Login
				</Button>
			</div>
			<p>
				Not an existing user??
				<Link to="/signup">
					<span>SignUp</span>
				</Link>
			</p>
		</form>
	);
};

export default SignUp;
