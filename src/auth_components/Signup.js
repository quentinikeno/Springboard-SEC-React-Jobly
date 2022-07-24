import useFormState from "../custom_hooks/useFormState";
import { useNavigate } from "react-router-dom";

const Signup = ({ register }) => {
	const initialState = {
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		email: "",
	};
	const [formData, setFormData, formErrors, setFormErrors, handleChange] =
		useFormState(initialState);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const res = await register(formData);
		res.success ? navigate("/companies") : setFormErrors(res.errors);
	};

	return (
		<form onSubmit={handleSubmit}>
			{formErrors.length > 0 && (
				<div className="notification is-danger is-light">
					Unable to sign up. Please fix the errors below:
					<ul className="help">
						{formErrors.map((err) => (
							<li key={err}>{err}</li>
						))}
					</ul>
				</div>
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
				<label className="label" htmlFor="firstName">
					First Name
				</label>
				<input
					type="text"
					className={`input ${
						formErrors.length > 0 ? "is-danger" : ""
					}`}
					placeholder="First Name"
					id="firstName"
					name="firstName"
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<label className="label" htmlFor="lastName">
					Last Name
				</label>
				<input
					type="text"
					className={`input ${
						formErrors.length > 0 ? "is-danger" : ""
					}`}
					placeholder="Last Name"
					id="lastName"
					name="lastName"
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<label className="label" htmlFor="email">
					Email
				</label>
				<input
					type="text"
					className={`input ${
						formErrors.length > 0 ? "is-danger" : ""
					}`}
					placeholder="Email"
					id="email"
					name="email"
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<button className="button is-link" type="submit">
					Sign Up
				</button>
			</div>
		</form>
	);
};

export default Signup;
