import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./routes/Navbar";
import Loading from "./common/Loading";
import JoblyAPI from "./api_helpers/api";
import UserContext from "./context/userContext";
import useLocalStorageState from "./custom_hooks/useLocalStorageState";
import "./App.css";

function App() {
	const [token, setToken] = useLocalStorageState("token");
	const [currentUser, setCurrentUser] = useState(null);
	const [appliedJobs, setAppliedJobs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

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

	const patch = async (username, data) => {
		if (currentUser) {
			try {
				const user = await JoblyAPI.patchUser(username, data);
				return { success: true, user };
			} catch (errors) {
				return { success: false, errors };
			}
		} else {
			return { success: false, errors: ["Please login first."] };
		}
	};

	const applyOnClick = async (username, jobId) => {
		try {
			await JoblyAPI.applyJob(username, jobId);
			setAppliedJobs((appliedJobs) => [...appliedJobs, jobId]);
			return { success: true };
		} catch (errors) {
			return console.debug(errors);
		}
	};

	useEffect(
		function updateCurrentUserOnTokenChange() {
			console.debug("useEffect to load user data.  Token:", token);
			async function updateCurrentUser() {
				if (token) {
					try {
						JoblyAPI.token = token;
						const user = await JoblyAPI.getUserByToken();
						setCurrentUser(user);
						setAppliedJobs(user.applications);
					} catch (error) {
						console.error(error);
						setCurrentUser(null);
						setAppliedJobs(null);
					}
				}
				setIsLoading(false);
			}
			updateCurrentUser();
		},
		[token]
	);

	if (isLoading) return <Loading />;

	return (
		<div className="App container">
			<UserContext.Provider
				value={{
					currentUser,
					setCurrentUser,
					appliedJobs,
					applyOnClick,
				}}
			>
				<Navbar signOut={signOut} />
				<AppRoutes login={login} register={register} patch={patch} />
			</UserContext.Provider>
		</div>
	);
}

export default App;
