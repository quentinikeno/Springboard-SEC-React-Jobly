import { useState, useCallback } from "react";
import { debounce } from "lodash";

const Search = ({ search }) => {
	const [query, setQuery] = useState("");

	const debouncedSearch = useCallback(debounce(search, 500), []);
	const handleChange = (event) => {
		const { value } = event.target;
		setQuery(value);
		debouncedSearch(value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<form className="mb-3" onSubmit={handleSubmit}>
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
