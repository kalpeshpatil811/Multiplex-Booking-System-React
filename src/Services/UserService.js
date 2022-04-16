import axios from "axios";
const USERS_API_BASE_URL = "http://localhost:9091/multiplex/users";

class UserService {
	getUsers() {
		return axios.get(USERS_API_BASE_URL);
	}

	saveUsers(user) {
		return axios.post(USERS_API_BASE_URL, user);
	}
}
export default new UserService();
