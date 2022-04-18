import axios from "axios";
const SHOWS_API_BASE_URL = "http://localhost:9091/multiplex/shows";

class ShowsService {
	//Methos for calling rest api
	getShows() {
		return axios.get(SHOWS_API_BASE_URL);
	}

	saveShows(shows) {
		return axios.post(SHOWS_API_BASE_URL, shows);
	}

	deleteShow(showId) {
		return axios.delete(SHOWS_API_BASE_URL + "/" + showId);
	}
}
export default new ShowsService();
