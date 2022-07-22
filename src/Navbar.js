import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="level">
			<div className="level-left">
				<span className="level-item is-size-2 has-text-primary">
					Jobly
				</span>
				<NavLink className="level-item" to="/">
					Home
				</NavLink>
				<NavLink className="level-item" to="/companies">
					Companies
				</NavLink>
				<NavLink className="level-item" to="/jobs">
					Jobs
				</NavLink>
			</div>

			<div className="level-right">
				<NavLink className="level-item" to="/login">
					Login
				</NavLink>
				<NavLink className="level-item" to="/signup">
					Sign Up
				</NavLink>
				<NavLink className="level-item" to="/profile">
					Profile
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
