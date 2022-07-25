import useFormState from "./custom_hooks/useFormState";
import { useContext } from "react";
import UserContext from "./context/userContext";

const Profile = ({ patch }) => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const initialState = {
		firstName: currentUser.firstName,
		lastName: currentUser.lastName,
		email: currentUser.email,
		username: currentUser.username,
		password: "",
	};
	const [formData, setFormData, formErrors, setFormErrors, handleChange] =
		useFormState(initialState);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const patchData = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			password: formData.password,
		};
		const res = await patch(currentUser.username, patchData);
		if (res.success) {
			setCurrentUser(res.user);
			setFormData({ ...formData, password: "" });
			setFormErrors([]);
		} else {
			setFormErrors(res.errors);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{formErrors.length > 0 && (
				<div className="notification is-danger is-light">
					Unable to update profile. Please fix the errors below:
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
				<p>{formData.username}</p>
			</div>
			<div className="field">
				<label className="label" htmlFor="password">
					Password
				</label>
				<input
					type="password"
					className={`input ${
						formErrors.length > 0 ? "is-danger" : ""
					}`}
					placeholder="password"
					id="password"
					name="password"
					value={formData.password}
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
					value={formData.firstName}
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
					value={formData.lastName}
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
					value={formData.email}
					onChange={handleChange}
				/>
			</div>
			<div className="field">
				<button className="button is-link" type="submit">
					Save Changes
				</button>
			</div>
		</form>
	);
};

export default Profile;
