import React from "react";
import TeamName from "./Form/Team-name";
import TeamAbbreviation from "./Form/Team-abbreviation";
import Website from "./Form/Website";
import Phone from "./Form/Phone";
import FoundedYear from "./Form/Team-year";
import Address from "./Form/Address";
import Stadium from "./Form/Stadium";
import Email from "./Form/Email";
import UploadedLogo from "./Form/Uploaded-logo";

const FormInputs = ({ validation }) => {
	
	return (
		<div id="form-inputs">
			<TeamName validation={validation} />
			<TeamAbbreviation validation={validation} />
			<Website validation={validation} />
			<Phone validation={validation} />
			<FoundedYear validation={validation} />
			<Address validation={validation} />
			<Stadium validation={validation} />
			<Email validation={validation} />
			<UploadedLogo/>
		</div >
	);
	

};

export default FormInputs;