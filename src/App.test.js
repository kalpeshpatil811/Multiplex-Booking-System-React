import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Movies from "./components/Movie/Movies";
import SignUp from "./components/SignUp/SignUp";

test("Movie Name should be rendered", () => {
	render(<Movies />);
	const movieName = screen.getByText("Mission Mangal");
	expect(movieName).toBe("Mission Managal");
});

test("User Id should be rendered", () => {
	render(<SignUp />);
	const userId = screen.getByTestId(/SignUp/i);
	expect(userId).toBeInTheDocument();
});
