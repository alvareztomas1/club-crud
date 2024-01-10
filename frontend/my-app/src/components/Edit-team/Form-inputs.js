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

const FormInputs = ({ teamData, validation }) => {
	if (teamData) {
		return (
			<div id="form-inputs">
				<h1>{"Edit "}{teamData.name}<img className="team-info-logo" src={teamData.logo}></img></h1>
				<TeamName validation={validation} teamName={teamData.name} />
				<TeamAbbreviation validation={validation}  nameAbbreviation={teamData.nameAbbreviation} />
				<Website validation={validation}  website={teamData.website} />
				<Phone validation={validation}  phone={teamData.phone} />
				<FoundedYear validation={validation}  foundedYear={teamData.founded} />
				<Address validation={validation}  address={teamData.address} />
				<Stadium validation={validation}  stadium={teamData.stadium} />
				<Email validation={validation}  email={teamData.email} />
				<UploadedLogo/>
			</div >
		);
	}

};

export default FormInputs;