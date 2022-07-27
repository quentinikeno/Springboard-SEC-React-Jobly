import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
import Search from "../common/Search";
import JoblyAPI from "../api_helpers/api";
import Loading from "../common/Loading";

const Jobs = () => {
	const [jobs, setJobs] = useState(null);
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

	if (!jobs) return <Loading />;

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
			<section>
				{jobs.length > 0 ? jobCards : <p>No jobs match your search.</p>}
			</section>
		</div>
	);
};

export default Jobs;
