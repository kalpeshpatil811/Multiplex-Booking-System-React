import styles from "./Seat.module.css";
import React, { useState } from "react";
import clsx from "clsx";

const movies = [
	{
		name: "Mission Mangal",
		price: 200,
		occupied: [20, 21, 30, 1, 2, 8],
	},
	{
		name: "Hera Pheri",
		price: 200,
		occupied: [9, 41, 35, 11, 65, 26],
	},
	{
		name: "Total Dhamal",
		price: 275,
		occupied: [37, 25, 44, 13, 2, 3],
	},
	{
		name: "Naam Shabana",
		price: 180,
		occupied: [10, 12, 50, 33, 28, 47],
	},
	{
		name: "Comedy Factory",
		price: 260,
		occupied: [10, 12, 50, 33, 28, 47],
	},
	{
		name: "Home Alone",
		price: 330,
		occupied: [10, 12, 50, 33, 28, 47],
	},
];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

function Seat() {
	const [selectedMovie, setSelectedMovie] = useState(movies[0]);
	const [selectedSeats, setSelectedSeats] = useState([]);

	return (
		<div className={styles.seatapp}>
			<Movies
				movie={selectedMovie}
				onChange={(movie) => {
					setSelectedSeats([]);
					setSelectedMovie(movie);
				}}
			/>
			<ShowCase />
			<Cinema
				movie={selectedMovie}
				selectedSeats={selectedSeats}
				onSelectedSeatsChange={(selectedSeats) => setSelectedSeats(selectedSeats)}
			/>

			<p className={styles.info}>
				You have selected <span className={styles.count}>{selectedSeats.length}</span> seats for the
				price of <span className={styles.total}>{selectedSeats.length * selectedMovie.price}₹</span>
			</p>
			<button className="btn btn-primary">Proceed To Payment</button>
		</div>
	);
}

function Movies({ movie, onChange }) {
	return (
		<div className={styles.Movies}>
			<label htmlFor="movie">Pick a movie</label>
			<select
				id="movie"
				value={movie.name}
				onChange={(e) => {
					onChange(movies.find((movie) => movie.name === e.target.value));
				}}
			>
				{movies.map((movie) => (
					<option key={movie.name} value={movie.name}>
						{movie.name} ({movie.price})₹
					</option>
				))}
			</select>
		</div>
	);
}

function ShowCase() {
	return (
		<ul className={styles.ShowCase}>
			<li>
				<span className={styles.seat} /> <small>N/A</small>
			</li>
			<li>
				<span className={`${styles.seat} ${styles.selected}`} /> <small>Selected</small>
			</li>
			<li>
				<span className={`${styles.seat} ${styles.occupied}`} /> <small>Occupied</small>
			</li>
		</ul>
	);
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
	function handleSelectedState(seat) {
		const isSelected = selectedSeats.includes(seat);
		if (isSelected) {
			onSelectedSeatsChange(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
		} else {
			onSelectedSeatsChange([...selectedSeats, seat]);
		}
	}

	return (
		<div className={styles.Cinema}>
			<div className={styles.screen} />

			<div className={styles.seats}>
				{seats.map((seat) => {
					const isSelected = selectedSeats.includes(seat);
					const isOccupied = movie.occupied.includes(seat);
					return (
						<span
							tabIndex="0"
							key={seat}
							className={clsx(
								styles.seat,
								isSelected && styles.selected,
								isOccupied && styles.occupied
							)}
							onClick={isOccupied ? null : () => handleSelectedState(seat)}
							// onKeyPress={
							// 	isOccupied
							// 		? null
							// 		: (e) => {
							// 				if (e.key === "Enter") {
							// 					handleSelectedState(seat);
							// 				}
							// 		  }
							// }
						/>
					);
				})}
			</div>
		</div>
	);
}
export default Seat;
