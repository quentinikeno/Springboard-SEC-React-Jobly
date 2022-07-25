import { useContext } from "react";
import UserContext from "./context/userContext";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ signOut }) => {
	const { currentUser } = useContext(UserContext);

	const companiesAndJobs = (
		<>
			<NavLink className="navbar-item" to="/companies">
				Companies
			</NavLink>
			<NavLink className="navbar-item" to="/jobs">
				Jobs
			</NavLink>
		</>
	);
	const loginAndSignup = (
		<>
			<NavLink className="navbar-item" to="/login">
				Login
			</NavLink>
			<NavLink className="navbar-item" to="/signup">
				Sign Up
			</NavLink>
		</>
	);
	const profileAndSignout = (
		<>
			<NavLink className="navbar-item" to="/profile">
				{currentUser && currentUser.username}'s Profile
			</NavLink>
			<Link className="navbar-item" to="/" onClick={signOut}>
				Sign Out
			</Link>
		</>
	);
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-start">
				<div className="navbar-brand">
					<span className="navbar-item is-size-2 has-text-primary">
						Jobly
					</span>
				</div>
				<NavLink className="navbar-item" to="/">
					Home
				</NavLink>
				{currentUser && companiesAndJobs}
			</div>

			<div className="navbar-end">
				{currentUser ? profileAndSignout : loginAndSignup}
			</div>
		</nav>
	);
};

export default Navbar;
