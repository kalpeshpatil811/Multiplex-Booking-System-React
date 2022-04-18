import styles from "./SeatType.module.css";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import SeatTypeService from "../../Services/SeatTypeService";

export default function SeatType({ seatType }) {
	const navigate = useNavigate();

	const onDeleteHandle = (id) => {
		SeatTypeService.deleteSeatType(id).then((res) => {
			console.log(res);
			window.location.reload();
		});
	};

	const onUpdateHandle = () => {
		navigate(`/updateseattype/${seatType.seatTypeId}`);
	};

	return (
		<div className={styles.seatTypecard}>
			<h4>Seat Id: {seatType.seatTypeId}</h4>
			<h4>Seat Desc: {seatType.seatTypeDesc}</h4>
			<h4>Seat Fair: {seatType.seatFare}</h4>

			<Button
				variant="contained"
				onClick={onUpdateHandle}
				style={{ backgroundColor: "yellow", marginLeft: "25px" }}
			>
				Update
			</Button>

			<Button
				variant="contained"
				onClick={() => onDeleteHandle(seatType.seatTypeId)}
				style={{ backgroundColor: "red", marginLeft: "75px" }}
			>
				Delete
			</Button>
		</div>
	);
}
