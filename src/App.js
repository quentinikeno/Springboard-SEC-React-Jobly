import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import Jobs from "./Jobs";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Navbar from "./Navbar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/companies" element={<Companies />} />
				<Route path="/companies/:handle" element={<CompanyDetail />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
