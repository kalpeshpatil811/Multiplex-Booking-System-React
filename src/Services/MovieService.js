import axios from "axios";

const Movie_API_BASE_URL = "http://localhost:9091/multiplex/movies";

class MovieService {
	getMovies() {
		return axios.get(Movie_API_BASE_URL);
	}

	createMovies(movie) {
		return axios.post(Movie_API_BASE_URL, movie);
	}

	getMovieById(movieId) {
		return axios.get(Movie_API_BASE_URL + "/" + movieId);
	}

	updateMovie(movie) {
		return axios.put(Movie_API_BASE_URL, movie);
	}

	deleteMovie(movieId) {
		return axios.delete(Movie_API_BASE_URL + "/" + movieId);
	}
}

export default new MovieService();