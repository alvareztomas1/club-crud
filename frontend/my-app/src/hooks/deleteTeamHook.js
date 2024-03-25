import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/State-provider";
import handleDeleteTeam from "../services/delete-team/delete-team";


export default function deleteTeamUseffect(teamId, deleteTeam, mapTeamsList){
	const navigate = useNavigate();
	const { dispatch } = useContext(StateContext);


	

	handleDeleteTeam(teamId, deleteTeam, mapTeamsList, dispatch, navigate);

	
}