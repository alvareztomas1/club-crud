
export async function addTeamOnSubmit(e, handleFormValidation, setFormData){
	e.preventDefault();

	const formData = setFormData(e.target);
	handleFormValidation(formData);
}