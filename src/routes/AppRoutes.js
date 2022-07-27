import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Homepage";
import Companies from "../companies/Companies";
import CompanyDetail from "../companies/CompanyDetail";
import Jobs from "../jobs/Jobs";
import Login from "../auth_components/Login";
import Signup from "../auth_components/Signup";
import Profile from "../Profile";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = ({ login, register, patch }) => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route
				path="/companies"
				element={
					<ProtectedRoute>
						<Companies />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/companies/:handle"
				element={
					<ProtectedRoute>
						<CompanyDetail />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/jobs"
				element={
					<ProtectedRoute>
						<Jobs />
					</ProtectedRoute>
				}
			/>
			<Route path="/login" element={<Login login={login} />} />
			<Route path="/signup" element={<Signup register={register} />} />
			<Route
				path="/profile"
				element={
					<ProtectedRoute>
						<Profile patch={patch} />
					</ProtectedRoute>
				}
			/>
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};

export default AppRoutes;
