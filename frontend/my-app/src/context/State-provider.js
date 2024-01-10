import React from "react";
import fetchReducer from "../services/fetch-reducer";

export const StateContext = React.createContext();
const initialState = { loading: true, payload: null, error: null };

const StateProvider = ({children}) => {
	const [state, dispatch] = React.useReducer(fetchReducer, initialState);

	return(
		<StateContext.Provider value={{state, dispatch}}>
			{children}
		</StateContext.Provider>
	);
};

export default StateProvider;
