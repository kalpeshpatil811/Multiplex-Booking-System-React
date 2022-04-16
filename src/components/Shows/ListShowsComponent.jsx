import React, { Component } from "react";
import ShowsService from "../../Services/ShowsService";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class ListShowsComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			shows: [],
		};
		// event handling bind
		this.addShows = this.addShows.bind(this);
	}
	// getdata
	componentDidMount() {
		ShowsService.getShows().then((res) => {
			this.setState({ shows: res.data });
		});
	}
	// add shows method
	addShows() {
		this.props.history.push("/add-shows");
	}

	render() {
		return (
			<div className="row">
				<div className="row">
					{/* event handlig method */}
					{/* <button className="btn btn-primary" onClick={this.props.addShows}> Add Shows</button> */}
					<Link class="btn btn-primary active" aria-current="page" href="" to="/add-shows">
						Add More Shows
					</Link>
				</div>
				{this.state.shows.map((shows) => (
					<Card
						border="primary"
						style={{
							width: "18rem",
							margin: "20px",
							backgroundColor: "cyan",
							boxShadow: "4px 4px 5px lime",
						}}
						className="text-center"
					>
						<Card.Body>
							<Card.Header>Show Id: {shows.showId}</Card.Header>
							<Card.Text>Slot No: {shows.slotNo}</Card.Text>
							<Card.Text>Time: 12:00pm</Card.Text>
							<Card.Text>Start Date: {shows.fromDate}</Card.Text>
							<Card.Text>End Date: {shows.toDate}</Card.Text>
							<Link class="btn btn-primary active" aria-current="page" to="/selectseats">
								Select Seats
							</Link>
						</Card.Body>
					</Card>
				))}
			</div>
		);
	}
}

export default ListShowsComponent;

{
	/* <div className = "row">
                <table className = "table table-striped table-bordered">
                <thead>
                                <tr>
                                    <th> Shows Id</th>
                                    <th> Shows Slot No</th>
                                    <th> Shows From Date</th>
                                    <th> Shows To Date</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    //diplays data
                                    this.state.shows.map(
                                        shows => 
                                        <tr key = {shows.id}>
                                             <td> {shows.showId} </td>   
                                             <td> {shows.slotNo}</td>
                                             <td> {shows.fromDate}</td>
                                             <td> {shows.toDate}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            </table>
                </div> */
}
