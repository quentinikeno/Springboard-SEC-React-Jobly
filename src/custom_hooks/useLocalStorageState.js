import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultValue = null) => {
	const initialState = localStorage.getItem(key) || defaultValue;

	const [state, setState] = useState(initialState);
	useEffect(() => {
		if (state === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, state);
		}
	}, [key, state]);
	return [state, setState];
};

export default useLocalStorageState;
