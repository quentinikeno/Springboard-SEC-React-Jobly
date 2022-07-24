import React from "react";

const JobCard = ({ id, title, salary, equity }) => {
	return (
		<div className="card mb-3">
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
			<footer className="card-footer">
				<a href="#" className="card-footer-item">
					Save
				</a>
			</footer>
		</div>
	);
};

export default JobCard;
