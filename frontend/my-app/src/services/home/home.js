export default async function showHomeRouteInformation(fetchData, mapData, dispatch){
	try{
		const teamsData = await fetchData();
		const mappedTeamData = mapData(teamsData);
		dispatch({type: "SUCCESS", payload: mappedTeamData});
	}catch(e){
		dispatch({type: "FAILURE", payload: e});
	}
}