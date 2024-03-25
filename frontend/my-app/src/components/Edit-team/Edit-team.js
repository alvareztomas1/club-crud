import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import FormInputs from "./Form-inputs";
import Loading from "../Loading";
import Buttons from "./Buttons";
import { StateContext } from "../../context/State-provider";
import useEditTeamEffect from "../../hooks/useEditTeamEffect";
import mapTeamsList, { mapTeam } from "../../mapper/mapper";
import { getTeamDataFromApi } from "../../api/teams";
import setFormData from "../../services/form-data";

const EditTeam = () => {
	const { teamName, teamId } = useParams();
	const { state, dispatch } = useContext(StateContext);
	const { handleOnSubmit, validation } = useEditTeamEffect(state, dispatch, teamName, teamId, getTeamDataFromApi, mapTeam, mapTeamsList);
	return (
		<div id="edit-team" className="container">
			<form onSubmit={(e) => {
				e.preventDefault();
				const formData = setFormData(e.target);
				handleOnSubmit(formData);
			}} action={`/edit/${teamName}/${teamId}`} method="POST" encType="multipart/form-data">

				<Loading loading={state.loading} />
				<FormInputs validation={validation} teamData={state.data} />
				<Buttons teamData={state.data} />
			</form>
		</div>
	);
};

export default EditTeam;