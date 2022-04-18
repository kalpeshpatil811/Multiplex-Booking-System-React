import React, { Component } from "react";
import ShowsService from "../../Services/ShowsService";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

class ListShowsComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			shows: [],
		};
		// event handling bind
		this.addShows = this.addShows.bind(this);
		this.deleteShow = this.deleteShow.bind(this);
	}

	// getdata
	componentDidMount() {
		ShowsService.getShows().then((res) => {
			this.setState({ shows: res.data });
		});
	}
	// add shows method
	addShows() {
		//rest api
		this.props.history.push("/add-shows");
	}

	deleteShow(id) {
		ShowsService.deleteShow(id).then((res) => {});
	}

	render() {
		return (
			<div
				className="row"
				style={{
					minHeight: "100vh",
					backgroundImage: "linear-gradient(to top, #feada6 0%, #f5efef 100%)",
				}}
			>
				<div className="row">
					<Link
						class="btn btn-primary"
						aria-current="page"
						to="/add-shows"
						style={{ width: "50%", marginLeft: "25%", marginTop: "10px" }}
					>
						Add More Shows
					</Link>
				</div>

				{this.state.shows.map((show) => (
					<Card
						border="danger"
						style={{
							backgroundImage: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
							width: "18rem",
							margin: "30px",
						}}
						className="text-center"
					>
						<Card.Body>
							<ListGroup variant="flush">
								<ListGroup.Item>Show Id: {show.showId}</ListGroup.Item>
								<ListGroup.Item>Slot No: {show.slotNo}</ListGroup.Item>
							</ListGroup>

							<Card.Header>Hall Id :{show.hall.hallId}</Card.Header>
							<Card.Header>Movie Id: {show.movies.movieId}</Card.Header>

							<Card.Title>Show Time: {show.showTime}</Card.Title>
							<Card.Title>Start Date: {show.fromDate}</Card.Title>
							<Card.Title>End Date: {show.toDate}</Card.Title>
							<Link class="btn btn-primary active" aria-current="page" to="/showseattype">
								Show Seats
							</Link>
							<Button
								type="submit"
								style={{ margin: "10px" }}
								className="btn btn-danger"
								onClick={() => this.deleteShow(show.showId)}
							>
								Delete
							</Button>
						</Card.Body>
					</Card>
				))}
			</div>
		);
	}
}

export default ListShowsComponent;
