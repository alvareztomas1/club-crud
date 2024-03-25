import React from "react";
import Buttons from "./Buttons";
import FormInputs from "./Form-inputs";
import handleAddTeamButton from "../../hooks/addTeamHook";

const AddTeam = ({ setRedirect }) => {
	const { validation, addTeamOnSubmit} = handleAddTeamButton(setRedirect);
	return(
		<div id="add-team" className="container">
			<title>Add new team</title>
			<form onSubmit={addTeamOnSubmit} action="/add-team" method="POST" encType="multipart/form-data">
				<h1 id="title">Add new team</h1>
				<FormInputs validation={validation} />
				<Buttons  />
			</form>
		</div>
	);

};

export default AddTeam;