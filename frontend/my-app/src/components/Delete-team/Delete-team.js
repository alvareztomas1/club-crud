import React from "react";
import deleteTeamUseffect from "../../hooks/deleteTeamHook";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { deleteTeam } from "../../api/teams";
import mapTeamsList from "../../mapper/mapper";


const DeleteTeam = () => {
	const { teamId } = useParams();
	deleteTeamUseffect(teamId, deleteTeam, mapTeamsList);

	return (
		<Loading loading={true}/>
	);
};

export default DeleteTeam;