import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SeatTypeService from "../../Services/SeatTypeService";
import SeatType from "./SeatType";
import styles from "./ShowSeatType.css";

function ShowSeatTypes() {
	const [seatTypes, setSeatTypes] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		SeatTypeService.getSeatTypes().then((res) => {
			setSeatTypes(res.data);
		});
	}, []);
	const onAddHandle = () => {
		navigate("/addseattype");
	};

	return (
		<div className={styles.seatTypes}>
			<h1>All Seats</h1>

			<Button variant="outlined" onClick={onAddHandle} color="secondary" className={styles.addbtn}>
				Add Seats
			</Button>

			<div className={styles.seatTypecontainer}>
				{seatTypes.map((seatType) => (
					<SeatType key={seatType.seatTypeId} seatType={seatType} />
				))}
			</div>
		</div>
	);
}

export default ShowSeatTypes;
