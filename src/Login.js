import useFormState from "./custom_hooks/useFormState";
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
	const initialState = { username: "", password: "" };
	const [formData, setFormData, handleChange] = useFormState(initialState);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await login(formData);
			navigate("/");
		} catch (error) {
			alert(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="field">
				<label className="label" htmlFor="username">
					Username
				</label>
				<input
					type="text"
					className="input"
					placeholder="username"
					id="username"
					name="username"
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<label className="label" htmlFor="password">
					Password
				</label>
				<input
					type="text"
					className="input"
					placeholder="password"
					id="password"
					name="password"
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<button className="button" type="submit">
					Login
				</button>
			</div>
		</form>
	);
};

export default Login;
