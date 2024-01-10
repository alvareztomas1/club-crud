/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Home from "../Home/Home";
import deleteTeamUseffect from "../../hooks/deleteTeamHook";
import { Spinner } from "react-bootstrap";
import Loading from "../Loading";



const DeleteTeam = () => {

	deleteTeamUseffect();

	return (
		<Loading loading={true}/>
	);
};

export default DeleteTeam;