import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Companies from "./Companies";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/companies" element={<Companies />} />
			</Routes>
		</div>
	);
}

export default App;
