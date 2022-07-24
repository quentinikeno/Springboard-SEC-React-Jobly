import { useState } from "react";

const Search = ({ search }) => {
	const [query, setQuery] = useState("");
	const handleChange = (event) => {
		const { value } = event.target;
		setQuery(value);
		search(value);
	};
	return (
		<form className="mb-3">
			<label htmlFor="search" className="is-sr-only">
				Search
			</label>
			<input
				className="input is-rounded"
				type="text"
				placeholder="Search..."
				name="search"
				id="search"
				value={query}
				onChange={handleChange}
			/>
		</form>
	);
};

export default Search;
