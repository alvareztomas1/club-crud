import React,{ useEffect } from "react";
import { editTeam } from "../api/teams";
import { useNavigate } from "react-router-dom";
import validateForm from "../services/validation";
import getEditTeamData, { handleEditTeam } from "../services/edit-team/edit-team";



export default function useEditTeamEffect(state, dispatch, teamAbbreviation, selectedTeamId, getTeamDataFromApi, mapTeam, mapTeamsList){
	const navigate = useNavigate();
	const [validation, setValidation] = React.useState(null);

	useEffect(() => {
		if(state.loading){
			getEditTeamData(getTeamDataFromApi, mapTeam, teamAbbreviation, selectedTeamId, dispatch);
		}
	}, [state.loading]);

	const handleOnSubmit = async (formData) => {
		const currentValidation = validateForm(formData);

		if(Object.values(currentValidation).includes(false)){
			setValidation(currentValidation);
			navigate(`/edit/${teamAbbreviation}/${selectedTeamId}`);
		}else{
			handleEditTeam(editTeam, mapTeamsList, teamAbbreviation, selectedTeamId, formData, dispatch, navigate);

		}
	};

	return { handleOnSubmit, validation };
}