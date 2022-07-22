import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import Search from "./Search";
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
		<CompanyCard key={company.handle} company={company} />
	));

	return (
		<div>
			<Search />
			{companyCards}
		</div>
	);
};

export default Companies;
