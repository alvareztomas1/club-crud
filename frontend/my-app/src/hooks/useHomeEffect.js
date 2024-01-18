import { useEffect } from "react";
import mapTeamList from "../mapper/mapper";
import getTeamsDataFromApi from "../api/teams";

export default function useHomeEffect(state, dispatch) {
	useEffect(() => {
		if(state.loading){
			const getData = async () => {
				try{
					const teamsData = await getTeamsDataFromApi();
					const mappedTeamData = mapTeamList(teamsData);
					dispatch({type: "SUCCESS", payload: mappedTeamData});
				}catch(e){
					dispatch({type: "FAILURE", payload: e});
				}
			};
			getData();
		}
	}, [state.loading]);
	
}
