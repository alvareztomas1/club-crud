export default async function showTeamIformation(dispatch, fetchData, mapData, teamName, teamId){
	try{
		const teamData = await fetchData(teamName, teamId);
		const mappedTeamData = mapData(teamData);
		
		document.title = `${mappedTeamData.name} Info`;

		dispatch({type: "SUCCESS", payload: mappedTeamData});
	}catch(e){
		dispatch({type: "FAILURE", payload: e});
	}
}