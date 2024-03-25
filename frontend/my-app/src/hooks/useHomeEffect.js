import { useEffect } from "react";
import showHomeRouteInformation from "../services/home/home";


export default function useHomeEffect(state, dispatch, getTeamsDataFromApi, mapTeamList) {
	useEffect(() => {
		if(state.loading){
			showHomeRouteInformation(getTeamsDataFromApi, mapTeamList, dispatch);
		}
	}, [state.loading]);
	
}
