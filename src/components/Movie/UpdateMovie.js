import React, { useEffect, useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import MovieService from "../../Services/MovieService";

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

const UpdateMovie = () => {
	const classes = useStyles();
	// create state variables for each input
	const [movieId, setMovieId] = useState("");
	const [movieName, setMovieName] = useState("");
	const [prize, setPrize] = useState("");
	const [description, setDescription] = useState("");
	const navigate = useNavigate();
	const { mId } = useParams();

	useEffect(() => {
		MovieService.getMovieById(mId).then((res) => {
			let movie = res.data;
			setMovieId(movie.movieId);
			setMovieName(movie.movieName);
			setPrize(movie.prize);
			setDescription(movie.description);
		});
	}, [mId]);

	const handleClose = () => {
		navigate("/showmovies");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
			movieId: movieId,
			movieName: movieName,
			description: description,
			prize: prize,
		};
		console.log(responseBody);
		MovieService.updateMovie(responseBody).then((res) => {
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
					label="Create Movie ID"
					variant="filled"
					required
					disabled
					value={movieId}
					color="secondary"
					onChange={(e) => setMovieId(e.target.value)}
				/>
				<TextField
					label="Movie Name"
					variant="filled"
					required
					type="text"
					value={movieName}
					color="secondary"
					onChange={(e) => setMovieName(e.target.value)}
				/>
				<TextField
					label="Description"
					variant="filled"
					required
					type="text"
					value={description}
					color="secondary"
					onChange={(e) => setDescription(e.target.value)}
				/>

				<TextField
					label="Movie Prize"
					variant="filled"
					required
					value={prize}
					color="secondary"
					onChange={(e) => setPrize(e.target.value)}
				/>
				<div>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button type="submit" variant="contained" color="primary">
						Update Movie
					</Button>
				</div>
			</form>
		</div>
	);
};

export default UpdateMovie;
