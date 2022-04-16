import "./User.css";
export default function User({ user }) {
	return (
		<div className="usercard">
			<h2>Name: {user.userName}</h2>
			<h4>Email: {user.emailId}</h4>
			<h4>Mobile No.: {user.mobileNumber}</h4>
		</div>
	);
}
