import "./App.css";
import Login from "./components/Login/Login";
import GetList from "./components/Users/ShowUsers";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowBookings from "./components/Booking/ShowBookings";
import SignUp from "./components/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AddBooking from "./components/Booking/AddBooking";
import ListShowsComponent from "./components/Shows/ListShowsComponent";
import AddShowsComponent from "./components/Shows/AddShowsComponent";
import UpdateBooking from "./components/Booking/UpdateBooking";
import ShowSeatTypes from "./components/SeatType/ShowSeatTypes";
import AddSeatType from "./components/SeatType/AddSeatType";
import ShowMovies from "./components/Movie/ShowMovies";
import AddMovie from "./components/Movie/AddMovie";
import UpdateMovie from "./components/Movie/UpdateMovie";
import UpdateSeatType from "./components/SeatType/UpdateSeatType";
import ShowBookingDetails from "./components/BookingDetails/ShowBookingDetails";
import AddBookingDetails from "./components/BookingDetails/AddBookingDetails";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/getlist" exact element={<GetList />} />
					<Route path="/showbookings" exact element={<ShowBookings />} />
					<Route path="/signup" exact element={<SignUp />} />
					<Route path="/addbooking" exact element={<AddBooking />} />
					<Route path="/updatebooking/:bId" exact element={<UpdateBooking />} />
					<Route path="/shows" exact element={<ListShowsComponent />} />
					<Route path="/add-shows" exact element={<AddShowsComponent />} />
					<Route path="/showmovies" exact element={<ShowMovies />} />
					<Route path="/addmovies" exact element={<AddMovie />} />
					<Route path="/updatemovies/:mId" exact element={<UpdateMovie />} />
					<Route path="/showseattype" exact element={<ShowSeatTypes />} />
					<Route path="/addseattype" exact element={<AddSeatType />} />
					<Route path="/updateseattype/:stId" exact element={<UpdateSeatType />} />
					<Route path="/showbookingdetails" exact element={<ShowBookingDetails />} />
					<Route path="/addbookingdetails" exact element={<AddBookingDetails />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
