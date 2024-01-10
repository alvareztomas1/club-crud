import  { useEffect } from "react";
import mapTeamList from "../mapper/mapper";
import { getSelectedTeam, getTeamsList } from "../services/teams";


export default function useTeamInfoEffect(state, dispatch, selectedTeamId) {

	useEffect(() => {
		if(state.loading){

			const getData = async () => {
				try{
					const teamsData = await getTeamsList();
					const mappedTeamData = mapTeamList(teamsData);
					const selectedTeam = getSelectedTeam(mappedTeamData, selectedTeamId);
					
					document.title = `${selectedTeam.name} Info`;

					dispatch({type: "SUCCESS", payload: selectedTeam});
				}catch(e){
					dispatch({type: "FAILURE", payload: e});
				}
			};
			getData();
		}

	}, [state.loading]);

	return state;
}
