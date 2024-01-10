import React, { useContext } from "react";
import setFormData from "../services/form-data";
import { addTeam } from "../api/teams";
import mapTeamList from "../mapper/mapper";
import { StateContext } from "../context/State-provider";
import { useNavigate } from "react-router-dom";
import validateForm from "../services/validation";

export default function handleAddTeamButton() {
	const navigate = useNavigate();
	const [validation, setValidation] = React.useState(null);
	const { dispatch } = useContext(StateContext);

	const addTeamOnSubmit = async (e) => {
		e.preventDefault();

		const formData = setFormData(e.target);
		handleFormValidation(formData);

	};
	const handleFormValidation = async (formData) => {
		const currentValidation = validateForm(formData);
		
		if(Object.values(currentValidation).includes(false)){
			setValidation(currentValidation);

			navigate("/add-team");
		}else{
			const response = await addTeam(formData);
			const mappedTeamsList = mapTeamList(response);	
		
			dispatch({ type: "SUCCESS", payload: mappedTeamsList });
			navigate("/?showToast=true&type=success&message=Team added successfully");
		}
	};

    
	return { addTeamOnSubmit, validation };
}