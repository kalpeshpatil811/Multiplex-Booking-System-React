import axios from 'axios'
const SHOWS_API_BASE_URL = "http://localhost:9091/multiplex/shows";

class ShowsService{

    getShows(){
    return axios.get(SHOWS_API_BASE_URL);
    }

    saveShows(shows){
        return axios.post(SHOWS_API_BASE_URL, shows)
    }
}
export default new ShowsService()