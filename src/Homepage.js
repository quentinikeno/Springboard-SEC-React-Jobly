import { useContext } from "react";
import UserContext from "./context/userContext";
import { Link } from "react-router-dom";

const Homepage = () => {
	const { currentUser } = useContext(UserContext);
	const subtitle = currentUser ? (
		<>
			<p className="subtitle">
				Welcome {currentUser.username}! Get started by clicking a button
				below to see jobs or companies.
			</p>
			<div className="buttons">
				<button className="button is-link">
					<Link to="/jobs">Jobs</Link>
				</button>
				<button className="button is-link is-light">
					<Link to="/companies">Companies</Link>
				</button>
			</div>
		</>
	) : (
		<>
			<p className="subtitle">
				Welcome to Jobly! Get started by signing in or creating a
				account.
			</p>
			<div className="buttons">
				<button className="button is-link">
					<Link to="/login">Login</Link>
				</button>
				<button className="button is-link is-light">
					<Link to="/signup">Sign Up</Link>
				</button>
			</div>
		</>
	);
	return (
		<section className="hero is-primary is-large">
			<div className="hero-body">
				<h1 className="title is-1">Jobly!</h1>
				{subtitle}
			</div>
		</section>
	);
};

export default Homepage;
