export default async function handleDeleteTeam(teamId, fetchData, mapData, dispatch, navigate) {
	try {
		const response = await fetchData(teamId);
		const mappedTeamsList = mapData(response);

		dispatch({ type: "SUCCESS", payload: mappedTeamsList });
		navigate("/?showToast=true&type=danger&message=Team deleted successfully");

	}catch(e){
		dispatch({ type: "SUCCESS", payload: e });
	}
	
}