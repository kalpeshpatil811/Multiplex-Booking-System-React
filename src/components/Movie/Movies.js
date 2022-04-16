import React from "react";
import list from "./MoviesData";
import "./Movies.css";
import MovieCard from "./MovieCard";

const Movies = () => {
	return (
		<section style={{ backgroundColor: "linear-gradient(315deg, #f8ef42 0%, #0fd64f 74%)" }}>
			{list.map((item) => (
				<MovieCard key={item.id} item={item} />
			))}
		</section>
	);
};

export default Movies;
