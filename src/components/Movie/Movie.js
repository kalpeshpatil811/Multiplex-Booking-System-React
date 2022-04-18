import image from "./image.jpg";
import MovieService from "../../Services/MovieService";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Edit, Delete } from "@material-ui/icons";

export default function Movie({ movie }) {
	const navigate = useNavigate();

	const onDeleteHandle = () => {
		MovieService.deleteMovie(movie.movieId).then((res) => {
			console.log(res);
			window.location.reload();
		});
	};
	const onUpdateHandle = () => {
		navigate(`/updatemovies/${movie.movieId}`);
	};

	return (
		<div>
			<div
				className="card"
				style={{
					float: "left",
					width: "21rem",
					marginLeft: "8rem",
					marginTop: "3rem",
					marginBottom: "5rem",
					boxShadow: "4px 4px 5px 1px",
				}}
			>
				<img
					src={image}
					className="card-img-top"
					alt="Movie"
					style={{ height: "17rem", width: "21rem" }}
				/>
				<div className="card-body" style={{ height: "8rem" }}>
					<h5 className="card-title">{movie.movieName}</h5>
					<h5 className="card-text">{movie.description}</h5>
					<h5 className="card-text">Prize: Rs.{movie.prize}</h5>
					<Button
						variant="contained"
						onClick={onUpdateHandle}
						startIcon={<Edit />}
						outlinedSizeSmall
						style={{ backgroundColor: "yellow" }}
					>
						Update
					</Button>
					<Button
						variant="contained"
						startIcon={<Delete />}
						onClick={onDeleteHandle}
						style={{ backgroundColor: "red", marginLeft: "75px" }}
					>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
}
