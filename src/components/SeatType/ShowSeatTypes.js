import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SeatTypeService from "../../Services/SeatTypeService";
import SeatType from "./SeatType";
import styles from "./ShowSeatType.module.css";

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
			<h1>
				<strong>All Seats </strong>
			</h1>

			<div className="container">
				<Button
					variant="outlined"
					onClick={onAddHandle}
					style={{ marginLeft: "25%" }}
					color="secondary"
					className={styles.addbtn}
				>
					Add Seats
				</Button>
			</div>

			<div className={styles.seatTypecontainer}>
				{seatTypes.map((seatType) => (
					<SeatType key={seatType.seatTypeId} seatType={seatType} />
				))}
			</div>
		</div>
	);
}

export default ShowSeatTypes;
