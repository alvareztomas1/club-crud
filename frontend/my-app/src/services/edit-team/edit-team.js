export default async function getEditTeamData(fetchData, mapData, teamAbbreviation, selectedTeamId, dispatch){
	try{
		const teamData = await fetchData(teamAbbreviation, selectedTeamId);
		const mappedTeamData = mapData(teamData);
        
		document.title = `Edit ${mappedTeamData.name}`;
		dispatch({type: "SUCCESS", payload: mappedTeamData});
	}catch(e){
		dispatch({type: "FAILURE", payload: e});

	}
}


export async function handleEditTeam(fetchData, mapData, teamAbbreviation, selectedTeamId, formData, dispatch, navigate){
	try{
		const response = await fetchData(teamAbbreviation, selectedTeamId, formData);
		const mappedTeamsList = mapData(response);
		
		dispatch({type: "SUCCESS", payload: mappedTeamsList});
		navigate("/?showToast=true&type=primary&message=Team edited successfully");


	}catch(e){
		dispatch({type: "FAILURE", payload: e});

	}
}