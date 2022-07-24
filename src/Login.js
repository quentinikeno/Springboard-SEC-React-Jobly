import useFormState from "./custom_hooks/useFormState";
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
	const initialState = { username: "", password: "" };
	const [formData, setFormData, formErrors, setFormErrors, handleChange] =
		useFormState(initialState);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const res = await login(formData);
		res.success ? navigate("/companies") : setFormErrors(res.errors);
	};

	return (
		<form onSubmit={handleSubmit}>
			{formErrors.length > 0 && (
				<p className="help is-danger">{formErrors}</p>
			)}
			<div className="field">
				<label className="label" htmlFor="username">
					Username
				</label>
				<input
					type="text"
					className={`input ${
						formErrors.length > 0 ? "is-danger" : ""
					}`}
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
					className={`input ${
						formErrors.length > 0 ? "is-danger" : ""
					}`}
					placeholder="password"
					id="password"
					name="password"
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<button className="button is-link" type="submit">
					Login
				</button>
			</div>
		</form>
	);
};

export default Login;
