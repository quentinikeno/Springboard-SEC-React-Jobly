import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCard from "../jobs/JobCard";
import JoblyAPI from "../api_helpers/api";

const CompanyDetail = () => {
	const { handle } = useParams();
	const [company, setCompany] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(function fetchCompanyDataOnLoad() {
		async function fetchCompanyData() {
			const data = await JoblyAPI.getCompany(handle);
			setCompany(data);
			setIsLoading(false);
		}
		fetchCompanyData();
	}, []);

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<div>
			<section className="hero is-info">
				<div className="hero-body has-text-centered">
					<h1 className="is-size-1">{company.name}</h1>
					{company.logoUrl && (
						<figure className="image is-96x96 mx-auto">
							<img src={company.logoUrl} />
						</figure>
					)}
					<p className="subtitle">{company.description}</p>
					<p className="subtitle">
						Number of employees: {company.numEmployees}
					</p>
				</div>
			</section>
			<section>
				<h2 className="is-size-2 my-3 has-text-centered">
					Job Openings:
				</h2>
				<hr />
				{company.jobs.map((job) => (
					<JobCard
						key={job.id}
						title={job.title}
						id={job.id}
						salary={job.salary}
						equity={job.equity}
					/>
				))}
			</section>
		</div>
	);
};

export default CompanyDetail;
