import "./App.css";
import Login from "./components/Login/Login";
import GetList from "./components/Users/ShowUsers";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowBookings from "./components/Booking/ShowBookings";
import SignUp from "./components/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Seat from "./components/Seat/Seat";
import AddBooking from "./components/Booking/AddBooking";
import ListShowsComponent from "./components/Shows/ListShowsComponent";
import AddShowsComponent from "./components/Shows/AddShowsComponent";
import UpdateBooking from "./components/Booking/UpdateBooking";
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
					<Route path="/selectseats" exact element={<Seat />} />
					<Route path="/signup" exact element={<SignUp />} />
					<Route path="/addbooking" exact element={<AddBooking />} />
					<Route path="/updatebooking" exact element={<UpdateBooking />} />
					<Route path="/shows" exact element={<ListShowsComponent />} />
					<Route path="/add-shows" exact element={<AddShowsComponent />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
