import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import Search from "./Search";
import JoblyAPI from "./api_helpers/api";

const Companies = () => {
	const [companies, setCompanies] = useState([]);
	const [companyQuery, setCompanyQuery] = useState(null);

	useEffect(
		function fetchCompaniesDataOnLoad() {
			async function fetchCompaniesData() {
				const data = await JoblyAPI.getCompanies({
					name: companyQuery,
				});
				setCompanies(data);
			}
			fetchCompaniesData();
		},
		[companyQuery]
	);

	const search = (query) => {
		query === "" ? setCompanyQuery(null) : setCompanyQuery(query);
	};

	const companyCards = companies.map((company) => (
		<CompanyCard key={company.handle} company={company} />
	));

	return (
		<div>
			<Search search={search} />
			{companyCards}
		</div>
	);
};

export default Companies;
