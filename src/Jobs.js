import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
import Search from "./Search";
import JoblyAPI from "./api_helpers/api";

const Jobs = () => {
	const [jobs, setJobs] = useState([]);
	const [jobQuery, setJobQueries] = useState(null);

	useEffect(
		function fecthJobsDataOnLoad() {
			async function fetchJobsData() {
				const data = await JoblyAPI.getJobs({ title: jobQuery });
				setJobs(data);
			}
			fetchJobsData();
		},
		[jobQuery]
	);

	const search = (query) => {
		query === "" ? setJobQueries(null) : setJobQueries(query);
	};

	const jobCards = jobs.map((job) => (
		<JobCard
			key={job.id}
			title={job.title}
			id={job.id}
			salary={job.salary}
			equity={job.equity}
		/>
	));

	return (
		<div>
			<Search search={search} />
			<section>{jobCards}</section>
		</div>
	);
};

export default Jobs;
