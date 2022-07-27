import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import Search from "../common/Search";
import JoblyAPI from "../api_helpers/api";
import Loading from "../common/Loading";

const Companies = () => {
	const [companies, setCompanies] = useState(null);
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

	if (!companies) return <Loading />;

	const search = (query) => {
		query === "" ? setCompanyQuery(null) : setCompanyQuery(query);
	};

	const companyCards = companies.map((company) => (
		<CompanyCard key={company.handle} company={company} />
	));

	return (
		<div>
			<Search search={search} />
			{companies.length > 0 ? (
				companyCards
			) : (
				<p>No companies match your search.</p>
			)}
		</div>
	);
};

export default Companies;
