import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/companies">Companies</NavLink>
			<NavLink to="/jobs">Jobs</NavLink>
			<NavLink to="/login">Login</NavLink>
			<NavLink to="/signup">Sign Up</NavLink>
			<NavLink to="/profile">Profile</NavLink>
		</nav>
	);
};

export default Navbar;
