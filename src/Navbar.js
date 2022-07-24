import { useContext } from "react";
import UserContext from "./context/userContext";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ signOut }) => {
	const user = useContext(UserContext);
	const loginAndSignup = (
		<>
			<NavLink className="level-item" to="/login">
				Login
			</NavLink>
			<NavLink className="level-item" to="/signup">
				Sign Up
			</NavLink>
		</>
	);
	const profileAndSignout = (
		<>
			<NavLink className="level-item" to="/profile">
				{user && user.username}'s Profile
			</NavLink>
			<Link className="level-item" to="/" onClick={signOut}>
				Sign Out
			</Link>
		</>
	);
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
				{user ? profileAndSignout : loginAndSignup}
			</div>
		</nav>
	);
};

export default Navbar;
