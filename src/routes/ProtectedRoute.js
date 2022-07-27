import { useContext } from "react";
import UserContext from "../context/userContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { currentUser } = useContext(UserContext);
	return currentUser ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
