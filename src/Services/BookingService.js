import axios from "axios";

const BOOKING_API_BASE_URL = "http://localhost:9091/multiplex/bookings";

class BookingService {
	getBookings() {
		return axios.get(BOOKING_API_BASE_URL);
	}

	createBooking(booking) {
		return axios.post(BOOKING_API_BASE_URL, booking);
	}

	getBookingById(bookingId) {
		return axios.get(BOOKING_API_BASE_URL + "/" + bookingId);
	}

	updateBooking(booking, bookingId) {
		return axios.put(BOOKING_API_BASE_URL + "/" + bookingId, booking);
	}

	deleteBooking(bookingId) {
		return axios.delete(BOOKING_API_BASE_URL + "/" + bookingId);
	}
}

export default new BookingService();
