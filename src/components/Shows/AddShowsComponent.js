import React, { Component } from "react";
import ShowsService from "../../Services/ShowsService";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

class AddShowsComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showId: "",
			slotNo: "",
			showTime: "",
			hallId: "",
			movieId: "",
			fromDate: "",
			toDate: "",
		};
		this.chnageShowIdHandler = this.chnageShowIdHandler.bind(this);
		this.chnageSlotNoHandler = this.chnageSlotNoHandler.bind(this);
		this.chnageShowTimeHandler = this.chnageShowTimeHandler.bind(this);
		this.chnageHallIdHandler = this.chnageHallIdHandler.bind(this);
		this.chnageMovieIdHandler = this.chnageMovieIdHandler.bind(this);
		this.chnageFromDateHandler = this.chnageFromDateHandler.bind(this);
		this.chnageToDateHandler = this.chnageToDateHandler.bind(this);
		this.saveShows = this.saveShows.bind(this);
	}

	chnageShowIdHandler = (event) => {
		this.setState({ showId: event.target.value });
	};

	chnageSlotNoHandler = (event) => {
		this.setState({ slotNo: event.target.value });
	};

	chnageShowTimeHandler = (event) => {
		this.setState({ showTime: event.target.value });
	};

	chnageHallIdHandler = (event) => {
		this.setState({ hallId: event.target.value });
	};

	chnageMovieIdHandler = (event) => {
		this.setState({ movieId: event.target.value });
	};

	chnageFromDateHandler = (event) => {
		this.setState({ fromDate: event.target.value });
	};
	chnageToDateHandler = (event) => {
		this.setState({ toDate: event.target.value });
	};

	saveShows = (e) => {
		e.preventDefault();
		let shows = {
			showId: this.state.showId,
			slotNo: this.state.slotNo,
			showTime: this.state.showTime,
			hall: { hallId: this.state.hallId },
			movies: { movieId: this.state.movieId },
			fromDate: this.state.fromDate,
			toDate: this.state.toDate,
		};
		console.log("shows =>" + JSON.stringify(shows));
		ShowsService.saveShows(shows).then((res) => {
			this.props.history.push("/shows");
		});
	};

	cancel() {
		this.props.history.push("/shows");
	}

	render() {
		return (
			<div
				style={{
					marginBottom: "50px",
					minHeight: "100vh",
					backgroundImage: "linear-gradient(to top, #feada6 0%, #f5efef 100%)",
				}}
			>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							<h2>Add shows</h2>
							<div className="card-body">
								<form>
									<div className="form-group">
										<label>show Id:</label>
										<input
											type="number"
											placeholder="Enter Show Id"
											name="showId"
											className="form-control"
											value={this.state.showId}
											onChange={this.chnageShowIdHandler}
											required
										/>
									</div>

									<div className="form-group">
										<label>Slot No:</label>
										<input
											type="number"
											placeholder="Enter slot no"
											name="slotNo"
											className="form-control"
											value={this.state.slotNo}
											onChange={this.chnageSlotNoHandler}
										/>
									</div>

									<div className="form-group">
										<label>Show Time:</label>
										<input
											type="time"
											name="showTime"
											className="form-control"
											value={this.state.showTime}
											onChange={this.chnageShowTimeHandler}
										/>
									</div>

									<div className="form-group">
										<label>Hall ID:</label>
										<input
											type="number"
											name="hallId"
											className="form-control"
											value={this.state.hallId}
											onChange={this.chnageHallIdHandler}
										/>
									</div>

									<div className="form-group">
										<label>Movie ID:</label>
										<input
											type="number"
											name="movieId"
											className="form-control"
											value={this.state.movieId}
											onChange={this.chnageMovieIdHandler}
										/>
									</div>

									<div className="form-group">
										<label>From Date:</label>
										<input
											type="date"
											id="fromDate"
											name="date"
											className="form-control"
											value={this.state.fromDate}
											onChange={this.chnageFromDateHandler}
										/>
									</div>

									<div className="form-group">
										<label>To Date:</label>
										<input
											type="date"
											id="toDate"
											name="date"
											className="form-control"
											value={this.state.toDate}
											onChange={this.chnageToDateHandler}
										/>
									</div>

									<br />
									<div class="d-grid gap-2">
										<button type="submit" className="btn btn-success" onClick={this.saveShows}>
											Save
										</button>
										<Link to="/shows" class="btn btn-primary" aria-current="page">
											Back to list
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddShowsComponent;
