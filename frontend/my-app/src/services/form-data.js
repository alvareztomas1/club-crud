export default function setFormData(form){
	const formData = new FormData();
	formData.append("name", form.name.value);
	formData.append("address", form.address.value);
	formData.append("phone", form.phone.value);
	formData.append("email", form.email.value);
	formData.append("website", form.website.value);
	formData.append("venue", form.stadium.value);
	formData.append("crestUrl", form.logo.files[0] || null);
	formData.append("founded", form["founded-year"].value);
	formData.append("tla", form.nameAbbreviation.value);

	console.log(form.logo.files[0]);
	return formData;
}