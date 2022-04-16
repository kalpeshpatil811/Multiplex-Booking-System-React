import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
	const { title, info, price, img } = item;
	const navigate = useNavigate();
	function handleClick() {
		navigate("/shows");
	}
	return (
		<div className="cards">
			<div className="image_box" style={{ display: "flex", justifyContent: "center" }}>
				<img src={img} alt="" />
			</div>
			<div className="details">
				<p style={{ display: "flex", justifyContent: "center" }}>{title}</p>
				<p style={{ display: "flex", justifyContent: "center" }}>{info}</p>
				<p style={{ display: "flex", justifyContent: "center" }}>Price - {price}Rs</p>
			</div>
			<button
				style={{ display: "block", margin: "auto", cursor: "pointer" }}
				onClick={() => handleClick()}
			>
				Book
			</button>
		</div>
	);
};

export default MovieCard;
