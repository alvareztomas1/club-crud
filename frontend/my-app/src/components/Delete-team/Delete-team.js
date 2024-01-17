import React from "react";
import deleteTeamUseffect from "../../hooks/deleteTeamHook";
import Loading from "../Loading";



const DeleteTeam = () => {

	deleteTeamUseffect();

	return (
		<Loading loading={true}/>
	);
};

export default DeleteTeam;