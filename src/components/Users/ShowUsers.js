import React, { Component } from "react";
import User from "./User";

class GetList extends Component {
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("http://localhost:9091/multiplex/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true,
				});
				console.log(json);
			});
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded)
			return (
				<div>
					<h1> Pleses wait some time.... </h1>
				</div>
			);

		return (
			<div
				style={{
					height: "100vh",
					backgroundImage: "linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)",
				}}
			>
				<h1> All Users </h1>
				{items.map((item) => (
					<User key={item.userId} user={item} />
				))}
			</div>
		);
	}
}

export default GetList;
