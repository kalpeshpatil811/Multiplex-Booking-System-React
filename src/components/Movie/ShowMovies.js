import MovieService from "../../Services/MovieService";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Movie from "./Movie";

function ShowMovies() {
	const [movies, setMovies] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		MovieService.getMovies().then((res) => {
			setMovies(res.data);
		});
	}, []);
	const onAddHandle = () => {
		navigate("/addmovies");
	};
	return (
		<div
			style={{
				minHeight: "150vh",
				backgroundImage: "linear-gradient(to top, #37ecba 0%, #72afd3 100%)",
			}}
		>
			<div style={{ marginRight: "2rem", textAlign: "center" }}>
				<button
					id="addbtn"
					className="btn btn-primary"
					styletype="button"
					style={{ width: "30%", marginTop: "10px" }}
					onClick={onAddHandle}
				>
					Add Movie
				</button>
			</div>
			{movies.map((movie) => (
				<Movie key={movie.movieId} movie={movie} />
			))}
		</div>
	);
}

export default ShowMovies;
