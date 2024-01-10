/* eslint-disable no-unused-vars */
import React,{ useEffect } from "react";
import getTeamsData from "../api/teams";
import mapTeamList from "../mapper/mapper";
import { editTeam } from "../api/teams";
import setFormData from "../services/form-data";
import { useNavigate } from "react-router-dom";
import validateForm from "../services/validation";
import { getSelectedTeam, getTeamsList } from "../services/teams";



export default function useEditTeamEffect(state, dispatch, teamAbbreviation, selectedTeamId){
	const navigate = useNavigate();
	const [validation, setValidation] = React.useState(null);

	useEffect(() => {
		if(state.loading){
			const getData = async () => {
				try{
					const teamsData = await getTeamsList();
					const mappedTeamData = mapTeamList(teamsData);
					const selectedTeam = getSelectedTeam(mappedTeamData, selectedTeamId);
					
					document.title = `Edit ${selectedTeam.name}`;
					dispatch({type: "SUCCESS", payload: selectedTeam});
				}catch(e){
					dispatch({type: "FAILURE", payload: e});

				}
			};

			getData();
		}
	
	}, [state.loading]);

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		const formData = setFormData(e.target);

		handleFormValidation(formData);
		
	};
	const handleFormValidation = async (formData) => {
		const currentValidation = validateForm(formData);

		if(Object.values(currentValidation).includes(false)){
			setValidation(currentValidation);

			navigate(`/edit/${teamAbbreviation}/${selectedTeamId}`);
		}else{
			const response = await editTeam(teamAbbreviation, selectedTeamId, formData);
			const mappedTeamsList = mapTeamList(response);

			dispatch({ type: "SUCCESS", payload: mappedTeamsList });
			navigate("/?showToast=true&type=primary&message=Team edited successfully");
		}
	};


	return { handleOnSubmit, validation };
}