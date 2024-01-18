import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import Team from "./Team/Team";
import Information from "./Team/Information";
import Buttons from "./Buttons";
import { StateContext } from "../../context/State-provider";
import useTeamInfoEffect from "../../hooks/useTeamInfoEffect";

function TeamInfo() {
	const { teamName, teamId } = useParams();
	const {state, dispatch} = useContext(StateContext);

	useTeamInfoEffect(state, dispatch, teamName, teamId);
	return(
		<div id="team-info" className="container team-info">
			<Loading loading={state.loading} />
			<Team teamData={state.data} />
			<Information teamData={state.data} />
			<Buttons teamData={state.data} />
		</div>
			
		
	);
	
}
export default TeamInfo;