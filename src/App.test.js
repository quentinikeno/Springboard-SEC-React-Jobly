import { render, cleanup, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

afterEach(cleanup);

it("renders without crashing", () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
});

it("fetches and displays routes", async () => {
	const { getByText } = render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);

	expect(
		getByText(
			"Welcome to Jobly! Get started by signing in or creating an account."
		)
	).toBeInTheDocument();
});
