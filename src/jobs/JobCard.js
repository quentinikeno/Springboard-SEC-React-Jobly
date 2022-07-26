import { useContext } from "react";
import UserContext from "../context/userContext";

const JobCard = ({ id, title, salary, equity }) => {
	const { currentUser, appliedJobs, applyOnClick } = useContext(UserContext);
	const handleClick = () => {
		applyOnClick(currentUser.username, id);
	};
	const applyJobButton =
		appliedJobs.indexOf(id) === -1 ? (
			<button
				className="button is-primary is-light card-footer-item"
				onClick={handleClick}
			>
				Apply Now
			</button>
		) : (
			<button
				className="button is-danger is-light card-footer-item"
				disabled
			>
				Applied
			</button>
		);
	return (
		<div className="column is-full-mobile is-half-tablet mx-auto">
			<div className="card mb-3 ">
				<header className="card-header">
					<p className="card-header-title title">{title}</p>
				</header>
				<div className="card-content">
					<div className="content">
						<ul>
							<li>Salary: {salary}</li>
							<li>Equity: {equity}</li>
						</ul>
					</div>
				</div>
				<footer className="card-footer">{applyJobButton}</footer>
			</div>
		</div>
	);
};

export default JobCard;
