import { useState, useEffect } from "react";
import JoblyAPI from "./api_helpers/api";

const Companies = () => {
	const [companies, setCompanies] = useState([]);
	useEffect(async function fetchCompaniesData() {
		const data = await JoblyAPI.getCompanies();
		setCompanies(data);
	}, []);
	return <div>Companies</div>;
};

export default Companies;
