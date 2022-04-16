import axios from "axios";

const Seat_API_BASE_URL = "http://localhost:9091/multiplex/seatTypes";

class SeatTypeService {
	getSeatTypes() {
		return axios.get(Seat_API_BASE_URL);
	}

	createSeatType(seatType) {
		return axios.post(Seat_API_BASE_URL, seatType);
	}

	getSeatTypeById(seatTypeId) {
		return axios.get(Seat_API_BASE_URL + "/" + seatTypeId);
	}

	updateSeatType(seatType) {
		return axios.put(Seat_API_BASE_URL, seatType);
	}

	deleteSeatType(seatTypeId) {
		return axios.delete(Seat_API_BASE_URL + "/" + seatTypeId);
	}
}

export default new SeatTypeService();
