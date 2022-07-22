import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import Jobs from "./Jobs";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/companies" element={<Companies />} />
				<Route path="/companies/:handle" element={<CompanyDetail />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
