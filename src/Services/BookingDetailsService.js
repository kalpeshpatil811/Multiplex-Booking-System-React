import axios from "axios";

const BOOKINGDETAIL_API_BASE_URL = "http://localhost:9091/multiplex/bookingDetails";

class BookingDetailService {
	getBookingDetails() {
		return axios.get(BOOKINGDETAIL_API_BASE_URL);
	}

	createBookingDetail(bookingDetail) {
		return axios.post(BOOKINGDETAIL_API_BASE_URL, bookingDetail);
	}

	getBookingDetailById(bookingDetailId) {
		return axios.get(BOOKINGDETAIL_API_BASE_URL + "/" + bookingDetailId);
	}

	deleteBookingDetail(bookingDetailId) {
		return axios.delete(BOOKINGDETAIL_API_BASE_URL + "/" + bookingDetailId);
	}
}

export default new BookingDetailService();
