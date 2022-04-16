import React, { Component } from "react";
import ShowsService from "../../Services/ShowsService";
import { Link } from "react-router-dom";

class AddShowsComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showId: "",
			slotNo: "",
			fromDate: "",
			toDate: "",
		};
		this.chnageShowIdHandler = this.chnageShowIdHandler.bind(this);
		this.chnageSlotNoHandler = this.chnageSlotNoHandler.bind(this);
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
			<div>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							<h2>Add shows</h2>
							<div className="card-body">
								<form>
									<div className="form-group">
										<label>show Id:</label>
										<input
											placeholder="Show Id"
											name="showId"
											className="form-control"
											value={this.state.showId}
											onChange={this.chnageShowIdHandler}
										/>
									</div>
									<div className="form-group">
										<label>Slot No:</label>
										<input
											placeholder="Slot No"
											name="slotNo"
											className="form-control"
											value={this.state.slotNo}
											onChange={this.chnageSlotNoHandler}
										/>
									</div>
									<div className="form-group">
										<label>From Date:</label>
										<input
											placeholder="yyyy-MM-dd"
											name="fromDate"
											className="form-control"
											value={this.state.fromDate}
											onChange={this.chnageFromDateHandler}
										/>
									</div>
									<div className="form-group">
										<label>To Date:</label>
										<input
											placeholder="yyyy-MM-dd"
											name="toDate"
											className="form-control"
											value={this.state.toDate}
											onChange={this.chnageToDateHandler}
										/>
									</div>
									<br />
									<div class="d-grid gap-4">
										<Link
											class="btn btn-success"
											onClick={this.saveShows}
											aria-current="page"
											to="/shows"
										>
											Save
										</Link>
										<Link class="btn btn-warning active" aria-current="page" to="/shows">
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
