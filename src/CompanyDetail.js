import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyAPI from "./api_helpers/api";

const CompanyDetail = () => {
	const { handle } = useParams();
	const [company, setCompany] = useState([]);

	useEffect(function fetchCompanyDataOnLoad() {
		async function fetchCompanyData() {
			const data = await JoblyAPI.getCompany(handle);
			setCompany(data);
		}
		fetchCompanyData();
	}, []);

	return (
		<div>
			<section className="hero is-info">
				<div className="hero-body">
					<h1 className="title">{company.name}</h1>
					{company.logoUrl && (
						<figure class="image is-96x96 mx-auto">
							<img src={company.logoUrl} />
						</figure>
					)}
					<p className="subtitle">{company.description}</p>
					<p className="subtitle">
						Number of employees: {company.numEmployees}
					</p>
				</div>
			</section>
		</div>
	);
};

export default CompanyDetail;
