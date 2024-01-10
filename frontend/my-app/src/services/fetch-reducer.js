export default function fetchReducer(state, action){
	const { type, payload } = action;

	switch (type) {
	case "LOAD":
		return { loading: true, data: null, error: null };
	case "SUCCESS":
		return {
			...[state], loading: false, data: payload, error: null,
		};
	case "FAILURE":
		return {
			...[state], loading: false, data: null, error: payload,
		};
	default:
		return state;
	}
}
