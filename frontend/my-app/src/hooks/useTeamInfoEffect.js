import  { useEffect } from "react";
import showTeamIformation from "../services/team-info/team-info";



export default function useTeamInfoEffect(state, dispatch, teamNameAbbreviation, teamId, getTeamDataFromApi, mapTeam) {

	useEffect(() => {
		if(state.loading){
			showTeamIformation(dispatch, getTeamDataFromApi, mapTeam, teamNameAbbreviation, teamId);
		}

	}, [state.loading]);

	return state;
}
