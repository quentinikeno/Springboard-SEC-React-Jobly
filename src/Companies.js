import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyAPI from "./api_helpers/api";

const Companies = () => {
	const [companies, setCompanies] = useState([]);
	useEffect(function fetchCompaniesDataOnLoad() {
		async function fetchCompaniesData() {
			const data = await JoblyAPI.getCompanies();
			setCompanies(data);
		}
		fetchCompaniesData();
	}, []);

	const companyCards = companies.map((company) => (
		<CompanyCard
			key={company.handle}
			handle={company.handle}
			description={company.description}
			logoUrl={company.logoUrl}
		/>
	));

	return <div>{companyCards}</div>;
};

export default Companies;
