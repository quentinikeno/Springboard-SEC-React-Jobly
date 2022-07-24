import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import Companies from "./companies/Companies";
import CompanyDetail from "./companies/CompanyDetail";
import Jobs from "./jobs/Jobs";
import Login from "./auth_components/Login";
import Signup from "./auth_components/Signup";
import Profile from "./Profile";
import Navbar from "./Navbar";
import JoblyAPI from "./api_helpers/api";
import UserContext from "./context/userContext";
import "./App.css";

function App() {
	const [token, setToken] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);

	const login = async (data) => {
		try {
			const token = await JoblyAPI.login(data);
			setToken(token);
			return { success: true };
		} catch (errors) {
			return { success: false, errors };
		}
	};

	const register = async (data) => {
		try {
			const token = await JoblyAPI.register(data);
			setToken(token);
			return { success: true };
		} catch (errors) {
			return { success: false, errors };
		}
	};

	const signOut = () => {
		setToken(null);
		setCurrentUser(null);
	};

	useEffect(
		function updateCurrentUserOnTokenChange() {
			console.debug("useEffect to load user data.  Token:", token);
			async function updateCurrentUser() {
				try {
					const user = await JoblyAPI.getUserByToken();
					setCurrentUser(user);
				} catch (error) {
					console.error(error);
					setCurrentUser(null);
				}
			}
			if (token) updateCurrentUser();
		},
		[token]
	);

	return (
		<div className="App container">
			<UserContext.Provider value={user}>
				<Navbar signOut={signOut} />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/companies" element={<Companies />} />
					<Route
						path="/companies/:handle"
						element={<CompanyDetail />}
					/>
					<Route path="/jobs" element={<Jobs />} />
					<Route path="/login" element={<Login login={login} />} />
					<Route
						path="/signup"
						element={<Signup register={register} />}
					/>
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</UserContext.Provider>
		</div>
	);
}

export default App;
