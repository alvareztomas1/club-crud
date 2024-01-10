import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../context/State-provider";
import { deleteTeam } from "../../../api/teams";
import mapTeamList from "../../../mapper/mapper";

const DeleteButton = ({ teamId, handleClose }) => {
	const navigate = useNavigate();
	const { dispatch } = useContext(StateContext);


	const deleteOnClick = async() => {
		const response = await deleteTeam(teamId);
		const mappedTeamsList = mapTeamList(response);
		
		dispatch({ type: "SUCCESS", payload: mappedTeamsList });
		navigate("/?showToast=true&type=danger&message=Team deleted successfully");
		handleClose();
	};

	return (
		<button className="btn btn-danger" onClick={deleteOnClick}>
            Delete Team
		</button>
	);
};

export default DeleteButton;