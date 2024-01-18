import  { useEffect } from "react";
import { mapTeam } from "../mapper/mapper";
import { getTeamDataFromApi } from "../api/teams";


export default function useTeamInfoEffect(state, dispatch, teamName, teamId) {

	useEffect(() => {
		if(state.loading){

			const getData = async () => {
				try{
					/*const teamsData = await getTeamsList();
					const mappedTeamData = mapTeamList(teamsData);
					const selectedTeam = getSelectedTeam(mappedTeamData, selectedTeamId);*/

					const teamData = await getTeamDataFromApi(teamName, teamId);
					console.log(teamData);
					const mappedTeamData = mapTeam(teamData);
					
					document.title = `${mappedTeamData.name} Info`;

					dispatch({type: "SUCCESS", payload: mappedTeamData});
				}catch(e){
					dispatch({type: "FAILURE", payload: e});
				}
			};
			getData();
		}

	}, [state.loading]);

	return state;
}
