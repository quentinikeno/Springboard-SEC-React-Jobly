import { useState } from "react";

const useFormState = (initialState) => {
	const [formData, setFormData] = useState(initialState);
	const handleChange = (event) => {
		const { name, value } = event.target.value;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	return [formData, setFormData, handleChange];
};

export default useFormState;
