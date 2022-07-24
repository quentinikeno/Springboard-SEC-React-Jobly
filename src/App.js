import { Routes, Route, Navigate } from "react-router-dom";
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
	const [token, setToken] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);

	const login = async (data) => {
		try {
			const token = await JoblyAPI.login(data);
			setToken(token);
		} catch (error) {
			console.log(error);
		}
	};

	const register = async (data) => {
		try {
			const token = await JoblyAPI.register(data);
			setToken(token);
		} catch (error) {
			console.log(error);
		}
	};

	const signOut = () => {
		setToken(null);
		setCurrentUser(null);
	};

	return (
		<div className="App container">
			<Navbar signOut={signOut} />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/companies" element={<Companies />} />
				<Route path="/companies/:handle" element={<CompanyDetail />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/login" element={<Login login={login} />} />
				<Route
					path="/signup"
					element={<Signup register={register} />}
				/>
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</div>
	);
}

export default App;
