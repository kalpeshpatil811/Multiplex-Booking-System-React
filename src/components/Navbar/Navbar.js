import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/getlist" activeStyle>
						Users
					</NavLink>
					<NavLink to="/shows" activeStyle>
						Shows
					</NavLink>
					<NavLink to="/showbookings" activeStyle>
						Bookings
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/login">Login</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
