import { useEffect } from "react";
import mapTeamList from "../mapper/mapper";
import { getTeamsList } from "../services/teams";

export default function useHomeEffect(state, dispatch) {
	useEffect(() => {
		if(state.loading){
			const getData = async () => {
				try{
					const teamsData = await getTeamsList();
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
